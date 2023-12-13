import { defineEventHandler, getQuery, createError } from "h3";
import { getPageBySlug } from "../functions/getPageBySlug";
import { getPages } from "../functions/getPages";

export default defineEventHandler(async (event) => {
    
    const {slug, contentType, excludeSlug} = getQuery(event);

    if(!contentType){
      throw createError({
        statusCode: 400,
        statusMessage: 'contentType is required',
      })
    }

    // convert the excludeSlug to an array of strings
    //
    let excludeSlugs = Array<string>();
    if(excludeSlug && excludeSlug.toString() !== ''){

      if(Array.isArray(excludeSlug)){
        excludeSlugs = excludeSlug.map(s => s.toString());
      } else {
        excludeSlugs.push(excludeSlug.toString());
      }
    } 
    


    if(slug && slug.toString() !== ''){
      const content = await getPageBySlug(slug ? slug.toString() : "index", contentType?.toString());

      return content;   
    } else {
      const content = await getPages({limit:3 ,contentType: contentType?.toString(), excludeSlugs: excludeSlugs});
      return content;
    }


    
    
  })