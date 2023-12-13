import contentful, { EntrySkeletonType } from 'contentful'
import { getContentfulClient } from "./getContentfulClient";
import { mapEntryToPage } from "./mapEntryToPage";
import { Page } from '~/models/Pages';

// export type PageSkeleton =
// {
//   contentTypeId: "kundinsiktPage",
//   fields: {
//     title: contentful.EntryFieldTypes.Text,
//     body: contentful.EntryFieldTypes.RichText,
//     slug: contentful.EntryFieldTypes.Text,
//     mainImage: contentful.EntryFieldTypes.Object
//   }
// }

async function getEntryBySlug(slug: string, contentType: string){
   
  if (!slug) {
    console.error('no slug');
    return undefined;
  }  

  if(!contentType){
    console.error('no content type');
    return undefined;
  }

   const client = getContentfulClient();
   
  let contentBySlug = await client.getEntries<contentful.EntrySkeletonType,string>({   
    content_type: contentType, 
    "fields.slug" : slug     
  });


  if (!contentBySlug || !contentBySlug.items[0]) {
    return undefined;
  }

  const entry = contentBySlug.items[0];

  return entry;
}

export async function getPageBySlug(slug: string, contentType: string): Promise<Page | undefined> {
 
  const entry = await getEntryBySlug(slug, contentType);

  if(!entry){
    return undefined;
  }

  return mapEntryToPage(entry);
}