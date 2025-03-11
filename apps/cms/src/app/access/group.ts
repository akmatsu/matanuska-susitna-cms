import { BaseListTypeInfo, KeystoneContext } from '@keystone-6/core/types';
import { BaseAccessArgs, findUser } from './roles';

/**
 * Checks if the user is the owner of the item.
 */
export async function isOwner(
  args: BaseAccessArgs<BaseListTypeInfo>,
): Promise<boolean> {
  const user = await findUser(args);
  if (!user) return false;

  return user.id === args.item.ownerId;
}

/**
 * Checks if the user belongs to any groups that have access to the given item.
 */
export async function belongsToGroup(
  args: BaseAccessArgs<BaseListTypeInfo>,
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
