import { basePage, BasePageOptions } from '../fieldUtils';
import { DraftAndVersionsFactory } from '../DraftAndVersionsFactory';

export function coreFields(listNamePlural: string, opts?: BasePageOptions) {
  return {
    ...basePage(listNamePlural, opts),
  };
}

export const {
  Main: TestModel,
  Version: TestModelVersion,
  Draft: TestModelDraft,
} = DraftAndVersionsFactory('TestModel', coreFields, {
  versionLimit: 20,
  versionAgeDays: 365,
  query: `id heroImage title description reviewDate owner {id} unpublishAt body tags {id} userGroups {id} contacts {id} __typename`,
});
