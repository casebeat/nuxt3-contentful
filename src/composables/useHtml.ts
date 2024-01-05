import type { Document } from '@contentful/rich-text-types';
import renderContent from '../functions/renderContent';

export const useRenderContent = (document: Document) => {
  const html = renderContent(document);
  return html;
};
