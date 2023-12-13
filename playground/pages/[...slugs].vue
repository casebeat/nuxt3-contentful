<template>
    <h1>{{ fields.title }}</h1>

    <div v-html="fields.body"></div>

    

</template>
<script setup lang="ts">
import {PageModel} from '../models/PageModel'
import { mapToFieldsGeneric } from '../../src/functions/mapFields'

import { useFetchContentfulEntry } from '../../src/composables/useFetchContentfulEntry';

    const route = useRoute();
    const entry = await useFetchContentfulEntry(route.params.slugs, "kundinsiktPage");
    const fields = mapToFieldsGeneric<PageModel>(entry, PageModel);
</script>