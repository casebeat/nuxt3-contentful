import { Page } from "~/models/Pages";

export const useFetchPages = async (limit: number, contentType: string, excludeSlug: string|undefined) => {    
    let query = `?limit=${limit}&contentType=${contentType}`;
    if(excludeSlug){
        query += `&excludeSlug=${excludeSlug}`;
    }
console.log(query);
    const { data } = await useFetch<Page[]>(`/api/content`+ query);
    
    let pages =  data.value; 

    return pages;
}