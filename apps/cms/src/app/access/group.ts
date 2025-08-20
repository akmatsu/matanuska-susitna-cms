import { BaseListTypeInfo, KeystoneContext } from '@keystone-6/core/types';
import { BaseAccessArgs, findUser, isAdmin } from './roles';

/**
 * Checks if the user is the owner of the item.
 */
export async function isOwner<T extends BaseListTypeInfo = any>(
  args: BaseAccessArgs<T>,
): Promise<boolean> {
  const user = await findUser(args);
  if (!user) return false;

  return user.id === args.item.ownerId;
}

/**
 * Checks if the user belongs to any groups that have access to the given item.
 */
export async function belongsToGroup<T extends BaseListTypeInfo = any>(
  args: BaseAccessArgs<T>,
  listKey: string,
): Promise<boolean> {
  const user = await findUser(args);
  if (!user) return false;

  const [userGroups, ownedGroups, itemGroups] = await Promise.all([
    getActiveUserGroups(user.id.toString(), args.context),
    getActiveUserOwnedGroups(user.id.toString(), args.context),
    getItemsGroups(args.item.id, listKey, args.context),
  ]);

  const combinedGroups = [...userGroups, ...ownedGroups];
  return checkIfUserHasItemGroup(combinedGroups, itemGroups);
}

export async function isElectionUser<T extends BaseListTypeInfo = any>(
  args: BaseAccessArgs<T>,
) {
  const isadmin = await isAdmin(args);
  if (isadmin) return true;

  const isInElectionsUserGroup = await isInGroupWithName('electionsUser', args);
  return isInElectionsUserGroup;
}

export async function isNotElectionUser<T extends BaseListTypeInfo = any>(
  args: BaseAccessArgs<T>,
) {
  const isInElectionUserGroup = await isElectionUser(args);
  return !isInElectionUserGroup;
}

export async function isInGroupWithName(
  groupName: string,
  args: {
    context: KeystoneContext;
    session?: { id: string };
  },
) {
  if (args.session?.id) {
    const sudo = args.context.sudo();
    const userCount = await sudo.query.User.count({
      where: {
        AND: [
          { id: { equals: args.session.id } },
          {
            groups: {
              some: { name: { equals: groupName } },
            },
          },
        ],
      },
    });

    // Intentionally checking for count === 1 to ensure we correctly identified the user. If more than 1 somehow the ID is incorrect. If less than 1 then no user was found.
    return userCount === 1;
  }
  return false;
}

async function getActiveUserGroups(id: string, ctx: KeystoneContext) {
  const res = await ctx.query.User.findOne({
    where: { id: id },
    query: 'groups { id }',
  });

  return res.groups as { id: string }[];
}

async function getActiveUserOwnedGroups(id: string, ctx: KeystoneContext) {
  const res = await ctx.query.UserGroup.findMany({
    where: { owner: { id: { equals: id } } },
  });

  return res as { id: string }[];
}

async function getItemsGroups(id: string, lk: string, ctx: KeystoneContext) {
  const res = await ctx.query?.[lk].findOne({
    where: { id: id },
    query: 'userGroups { id }',
  });

  return res.userGroups as { id: string }[];
}

function checkIfUserHasItemGroup(
  userGroups: { id: string }[],
  itemGroups: { id: string }[],
): boolean {
  for (let i = 0, l = userGroups.length; i < l; i++) {
    const userGroup = userGroups[i];

    for (let j = 0, k = itemGroups.length; j < k; j++) {
      const itemGroup = itemGroups[j];
      if (itemGroup.id === userGroup.id) {
        return true;
      }
    }
  }
  return false;
}
