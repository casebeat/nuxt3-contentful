import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

export const useHtml = (document: Document) => {
    const html = documentToHtmlString(document);
    return html;
}  