import { FieldHooks } from '@keystone-6/core/types';
import { Lists } from '.keystone/types';
import { Prisma } from '@prisma/client';

// Types

interface PlanDocumentFieldHooks {
  currentDocument: FieldHooks<Lists.Plan.TypeInfo>;
  draftDocument: FieldHooks<Lists.Plan.TypeInfo>;
  pastDocuments: FieldHooks<Lists.Plan.TypeInfo>;
}

// Helpers
function toId(x?: Prisma.PlanDocumentWhereUniqueInput) {
  return x && typeof x.id !== 'undefined' ? x.id : undefined;
}

function asArr<T = Prisma.PlanDocumentWhereUniqueInput>(
  x: T | T[] | undefined | null,
): T[] {
  return Array.isArray(x) ? x : x ? [x] : [];
}

const disconnect = {
  disconnect: true,
};

/**
 * Contains all of the field hooks for the Plan Document fields on the {@link Plan} model
 */
export const planDocumentFieldHooks = {
  currentDocument: {
    /** @see {@link https://keystonejs.com/docs/config/hooks#resolve-input} */
    resolveInput({ resolvedData, item, operation, fieldKey }) {
      if (operation !== 'update') return resolvedData[fieldKey];

      const currentId = item.currentDocumentId;
      const newDraftId = toId(resolvedData.draftDocument?.connect);

      // Disconnect if new draft doc is the current doc
      if (newDraftId && newDraftId === currentId) return disconnect;

      // Disconnect if new draft docs include current doc
      const newPastIds = asArr(resolvedData.pastDocuments?.connect).map(toId);
      if (currentId && newPastIds.includes(currentId)) return disconnect;
      return resolvedData[fieldKey];
    },
  },
  draftDocument: {
    resolveInput({ resolvedData, fieldKey, operation, item }) {
      if (operation !== 'update') return resolvedData[fieldKey];

      // Disconnect if new current doc is the draft doc
      const draftId = item.draftDocumentId;
      const newCurrentId = toId(resolvedData.currentDocument?.connect);
      if (draftId && draftId === newCurrentId) return disconnect;
      return resolvedData[fieldKey];
    },
  },
  pastDocuments: {
    resolveInput({ operation, fieldKey, item, resolvedData }) {
      if (operation !== 'update') return resolvedData[fieldKey];

      const newCurrentId = toId(resolvedData.currentDocument?.connect);
      const newDraftId = toId(resolvedData.draftDocument?.connect);
      const oldCurrentId = item.currentDocumentId;

      // Remove any new docs from past
      const disconnect = [newCurrentId, newDraftId]
        .filter(Boolean)
        .map((id) => ({ id }));

      // If the current doc has changed, push all doc to past
      const connect = [];
      if (newCurrentId && oldCurrentId && oldCurrentId !== newCurrentId) {
        connect.push({ id: oldCurrentId });
      }

      if (disconnect.length > 0 || connect.length > 0) {
        return {
          ...(disconnect.length > 0 && { disconnect }),
          ...(connect.length > 0 && { connect }),
        };
      }
      return resolvedData[fieldKey];
    },
  },
} satisfies PlanDocumentFieldHooks;
