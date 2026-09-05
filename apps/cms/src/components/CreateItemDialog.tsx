'use client';
import { useId } from 'react';
import { Button, ButtonGroup } from '@keystar/ui/button';
import { Dialog, DialogContainer, useDialogContainer } from '@keystar/ui/dialog';
import { Box } from '@keystar/ui/layout';
import { Content } from '@keystar/ui/slots';
import { Heading } from '@keystar/ui/typography';

import { useList } from '@keystone-6/core/admin-ui/context';
import { Fields, useCreateItem } from '@keystone-6/core/admin-ui/utils';

function CreateItemDialogContent({
  listKey,
  onClose,
  onCreate,
}: {
  listKey: string;
  onClose: () => void;
  onCreate: (item: { id: string; label: string | null }) => void;
}) {
  const list = useList(listKey);
  const creator = useCreateItem(list);
  const dialogState = useDialogContainer();
  const formId = useId();

  return (
    <Dialog>
      <Heading>Add {list.singular}</Heading>
      <Content>
        <form
          id={formId}
          onSubmit={async (e) => {
            if (e.target !== e.currentTarget) return;
            e.preventDefault();
            const item = await creator.create();
            if (!item) return;
            onCreate(item);
          }}
        >
          <Box paddingY="xlarge">
            <Fields {...creator.props} />
          </Box>
        </form>
      </Content>
      <ButtonGroup>
        <Button
          onPress={() => {
            dialogState.dismiss();
            onClose();
          }}
        >
          Cancel
        </Button>
        <Button form={formId} prominence="high" type="submit">
          Add
        </Button>
      </ButtonGroup>
    </Dialog>
  );
}

/**
 * Replaces Keystone 6's <DrawerController><CreateItemDrawer/></DrawerController>.
 * Keystone 8 only ships BuildItemDialog (nested-create, no real id), so this
 * uses useCreateItem directly to create a real item immediately.
 */
export function CreateItemDialog({
  listKey,
  isOpen,
  onClose,
  onCreate,
}: {
  listKey: string;
  isOpen: boolean;
  onClose: () => void;
  onCreate: (item: { id: string; label: string | null }) => void;
}) {
  return (
    <DialogContainer onDismiss={onClose}>
      {isOpen && (
        <CreateItemDialogContent
          listKey={listKey}
          onClose={onClose}
          onCreate={onCreate}
        />
      )}
    </DialogContainer>
  );
}
