import { Document } from '@contentful/rich-text-types';

export const useRenderContent = (document: Document) => {
  const html = renderContent(document);
  return html;
};
