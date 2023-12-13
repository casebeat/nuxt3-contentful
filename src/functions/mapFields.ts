import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

type Constructor<T> = { new(): T };

export function mapToFieldsGeneric<T>(entry: any, classType: Constructor<T>) {
    let page = new classType();

    console.log('mapToFields');

    for (const key in entry) {
        if (Object.prototype.hasOwnProperty.call(page, key)) {
            if (entry[key] && entry[key].nodeType === 'document') {
                console.log(key + ' is document');
                page[key] = documentToHtmlString(entry[key]);
            } else {
                page[key] = entry[key];
            }
            console.log('page has property ' + key);
        }
    }

    console.log(page);
    return page;
}