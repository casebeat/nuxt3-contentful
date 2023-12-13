//import { Page } from "~/models/Pages";

export const useFetchContentfulEntry= async (slugs: string[] | string, contentType: string) => {    

    let slug= '';

    if(!slugs){
        slug = "index";
    }

    Array.isArray(slugs) ? slug = slugs.join('/') : slug = slugs.toString();
    
    slug = slug.replace(/\/$/, "");    

    const query = `?slug=${encodeURIComponent(slug)}&contentType=${contentType}`;

    const url = `/api/contentful${query}`;    

    const { data } = await useFetch(url);
    
    let page =  data.value; 

    if(!data){
        return null;
    }

    return page;    
  }  

