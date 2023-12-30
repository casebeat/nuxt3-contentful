import { mapEntryFieldsToPage } from '../functions/mapEntryFieldsToPage';

export async function useFetchContentfulEntriesMapped<T>(contentType: string, offset: number = 0, limit: number = 20) {
  const query = `?contentType=${contentType}&offset=${offset}&limit=${limit}`;

  const url = `/api/contentful${query}`;

  const { data } = await useFetch(url);

  const response = data?.value;

  const items = response.items.map((item) => mapEntryFieldsToPage<T>(item));

  return items;
}
