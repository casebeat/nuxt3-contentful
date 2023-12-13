import contentful, { EntrySkeletonType } from 'contentful'
import { getContentfulClient } from "./getContentfulClient";
import { mapEntryToPage } from "./mapEntryToPage";

type getPagesQuery ={
    limit: number;
    contentType: string;
    excludeSlugs: string[] | undefined;

}

export async function getPages(query: getPagesQuery){

    const client = getContentfulClient();

    let contentfulQuery = {  
        limit: query.limit,
        content_type: query.contentType ?? undefined        
    } as any;

    if(query.excludeSlugs && query.excludeSlugs.length > 0)
    {
        //contentfulQuery['fields.slug[ne]'] = query.excludeSlug;
        //let slugsToExclude = Array.isArray(query.excludeSlugs) ? query.excludeSlugs : [query.excludeSlug];
        contentfulQuery['fields.slug[nin]'] = query.excludeSlugs.join(',');
    }
    

    // get entries from contentful order by createdAt
    let entries = await client.getEntries<contentful.EntrySkeletonType,string>(contentfulQuery);
    
    return entries.items.map(entry => {
        return mapEntryToPage(entry);
    });
}