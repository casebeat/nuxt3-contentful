import * as contentful from 'contentful';

export const useImageSrc = (
  image: contentful.EntryFieldTypes.AssetLink,
  params: Record<string, string>|undefined = undefined,
) => {
  const content = image as any;
  const url = content?.fields?.file?.url;
  if (params) {
    let query = '';
    for (const [key, value] of Object.entries(params)) {
      query += `${key}=${value}&`;
    }
    return `${url}?${query}`;
  }

  return url;
};
