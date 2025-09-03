import { Editor } from '@milkdown/kit/core';
import {
  imageInlineComponent,
  inlineImageConfig,
} from '@milkdown/components/image-inline';
import {
  imageBlockComponent,
  imageBlockConfig,
} from '@milkdown/kit/component/image-block';
import {
  ApolloCache,
  DefaultContext,
  FetchResult,
  MutationFunctionOptions,
} from '@keystone-6/core/admin-ui/apollo';
import {
  Exact,
  Scalars,
  UploadImageMutation,
} from '../../../../../../graphql/graphql';

export function configureImageBlockFeature(
  editor: Editor,
  uploadImage: (
    options?:
      | MutationFunctionOptions<
          UploadImageMutation,
          Exact<{
            upload: Scalars['Upload']['input'];
            title: Scalars['String']['input'];
          }>,
          DefaultContext,
          ApolloCache<any>
        >
      | undefined,
  ) => Promise<FetchResult<UploadImageMutation>>,
) {
  editor
    .config((ctx) => {
      ctx.update(inlineImageConfig.key, (defaultConfig) => ({
        ...defaultConfig,
        async onUpload(file) {
          const data = await uploadImage({
            variables: {
              upload: file,
              title: file.name,
            },
          });

          return 'url';
        },
        imageIcon: '🖼️',
        uploadButton: 'Upload',
        confirmButton: 'Confirm',
        uploadPlaceholderText: 'Paste URL',
      }));
      ctx.update(imageBlockConfig.key, (defaultConfig) => ({
        ...defaultConfig,
        async onUpload(file) {
          const { data } = await uploadImage({
            variables: {
              upload: file,
              title: file.name,
            },
          });

          return data?.createImage?.file?.url || 'Image failed to upload';
        },
        imageIcon: '🖼️',
        captionIcon: '📝',
        uploadButton: 'Upload Image',
        confirmButton: 'Confirm',
        uploadPlaceholderText: 'Or paste an image URL',
        captionPlaceholderText: 'Add a caption',
      }));
    })
    .use(imageBlockComponent)
    .use(imageInlineComponent);
}
