import { useFetch } from '#imports';

export const useFetchContentfulEntriesRaw = async (contentType: string) => {
  const query = `?contentType=${contentType}`;

  const url = `/api/contentful${query}`;

  const { data } = await useFetch(url);

  return data?.value;
};
