// import contentful, { EntrySkeletonType } from 'contentful'
// import { Page } from '~/models/Pages';

// export function mapEntryToPage(entry: contentful.Entry<EntrySkeletonType, undefined, string>){
//     let page = {
//       contentType: entry.sys.contentType.sys.id
//     } as any;
      
  
//     if(entry.fields){
//       for (const [key, value] of Object.entries(entry.fields)) { 
//         const entryField = value;
        
//         page[key] = value;      
//       }
//     }
  
//     return page as Page;
//   }