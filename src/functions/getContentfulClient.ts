import { ContentfulClientApi, createClient } from "contentful";
import contentful from 'contentful'

export function getContentfulClient() : ContentfulClientApi<undefined>{
    
    const options = useRuntimeConfig().public.contentful;

    const client = contentful.createClient({
        // This is the space ID. A space is like a project folder in Contentful terms
    space: options.space,
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: options.accessToken
    });

    return client;
}