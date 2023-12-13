<template>
    <h1>{{ fields.title }}</h1>

<div v-html="fields.body"></div>


</template>

<script setup lang="ts">
import {PageModel} from '../models/PageModel'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { mapToFieldsGeneric } from '../../src/functions/mapFields'

import { useFetchContentfulEntry } from '../../src/composables/useFetchContentfulEntry';

    const route = useRoute();

    const entry = await useFetchContentfulEntry("index", "kundinsiktPage");

    const mapToFields = (entry) => {

        let page = new PageModel();

        console.log('mapToFields');

        for (const key in entry) {
            if (page.hasOwnProperty(key)) {
                if(entry[key].nodeType === 'document'){
                    console.log(key + ' is document');
                    page[key] = documentToHtmlString(entry[key])

                } else {
                    page[key] = entry[key];
                }
                console.log('page has property ' + key)
                
                //console.log(key);
            }
            //console.log(entry[key]);
            
        }

        console.log(page);
        return page;

    } 



    //const fields = mapToFields(entry);
    const fields = mapToFieldsGeneric<PageModel>(entry, PageModel);


</script>