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
  FetchResult,
  useMutation,
} from '@keystone-6/core/admin-ui/apollo';
import {
  Exact,
  Scalars,
  UploadImageMutation,
} from '../../../../../../graphql/graphql';

export function configureImageBlockFeature(
  editor: Editor,
  uploadImage: (
    options: useMutation.MutationFunctionOptions<
      UploadImageMutation,
      Exact<{
        upload: Scalars['Upload']['input'];
        title: Scalars['String']['input'];
      }>,
      ApolloCache
    > & {
      variables: {
        upload: Scalars['Upload']['input'];
        title: Scalars['String']['input'];
      };
    },
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

          return data?.data?.createImage?.file?.url || 'Image failed to upload';
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
