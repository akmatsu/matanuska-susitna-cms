import { type MdEditorProps } from '../types';
import { Editor as MilkEditor } from '@milkdown/kit/core';
import { useEditor } from '@milkdown/react';
import {
  useNodeViewFactory,
  usePluginViewFactory,
} from '@prosemirror-adapter/react';
import {
  configureDocCollectionFeature,
  configureBaseFeatures,
  configureBlockFeature,
  configureLinkTooltipFeature,
  configureListsFeature,
  configurePrimaryActionButtonFeature,
  configureSlashFeature,
  configureStepFeature,
  configureTableFeature,
  configureToolbarFeature,
  configureIframeFeature,
} from '../features';
import { configureInternalLinksFeature } from '../features/internalLinks/config';
import { configureRemarkDirectivesFeature } from '../features/remarkDirectives/config';
import { configureImageBlockFeature } from '../features/imageInline/config';
import { gql } from '../../../../../graphql';
import { useMutation } from '@keystone-6/core/admin-ui/apollo';
import { configureBlockquoteFeature } from '../features/Blockquote/config';

const uploadImageQuery = gql(`
  mutation UploadImage($upload: Upload!, $title: String!) {
    createImage(data:  {
      title: $title
      file:  {
        upload: $upload
      }
    }) {
      file {
        url
      }
    }
  }
`);

export function useEditorConfig({
  block = true,
  linkTooltip = true,
  documentCollections = true,
  primaryActionButton = true,
  slash = true,
  steps = true,
  toolbar = true,
  table = true,
  list = true,
  internalLinks = true,
  images = true,
  iframes = true,
  ...props
}: MdEditorProps) {
  const nodeViewFactory = useNodeViewFactory();
  const pluginViewFactory = usePluginViewFactory();

  const [uploadImage] = useMutation(uploadImageQuery);

  return useEditor((root) => {
    const editor = MilkEditor.make();
    configureBaseFeatures(editor, root, props);

    if (iframes) {
      configureIframeFeature(editor);
    }

    if (block) {
      configureBlockFeature(editor, pluginViewFactory);
    }

    if (slash) {
      configureSlashFeature(editor, pluginViewFactory);
    }
    if (toolbar) {
      configureToolbarFeature(editor, pluginViewFactory);
    }
    if (table) {
      configureTableFeature(editor);
    }

    if (linkTooltip) {
      configureLinkTooltipFeature(editor);
    }
    if (list) {
      configureListsFeature(editor);
    }
    if (documentCollections || primaryActionButton || internalLinks || steps) {
      configureRemarkDirectivesFeature(editor);
    }
    if (documentCollections) {
      configureDocCollectionFeature(editor, pluginViewFactory, nodeViewFactory);
    }
    if (internalLinks) {
      configureInternalLinksFeature(editor, pluginViewFactory);
    }
    if (steps) {
      configureStepFeature(editor);
    }
    if (primaryActionButton) {
      configurePrimaryActionButtonFeature(editor, nodeViewFactory);
    }
    if (images) {
      configureImageBlockFeature(editor, uploadImage);
    }

    configureBlockquoteFeature(editor, nodeViewFactory);

    return editor;
  });
}
