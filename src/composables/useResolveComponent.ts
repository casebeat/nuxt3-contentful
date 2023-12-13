import { Page} from "~/models/Pages";

const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const useResolveComponent = (page: Page) => {    

    const pageContentType = capitalizeFirstLetter(page?.contentType ?? "")

    const dynamicPage = resolveComponent(pageContentType);

    return dynamicPage;
}