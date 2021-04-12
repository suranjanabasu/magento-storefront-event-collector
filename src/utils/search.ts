import {
    SearchResultCategory,
    SearchResultProduct,
    SearchResults,
    SearchResultSuggestion,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

const getCategory = (
    name: string,
    ctx: SearchResults,
): SearchResultCategory | null => {
    const category = ctx.categories.find(category => category.name === name);

    if (!category) {
        return null;
    }

    return category;
};

const getProduct = (
    sku: string,
    ctx: SearchResults,
): SearchResultProduct | null => {
    const product = ctx.products.find(product => product.sku === sku);

    if (!product) {
        return null;
    }

    return product;
};

const getSuggestion = (
    suggestion: string,
    ctx: SearchResults,
): SearchResultSuggestion | null => {
    const suggested = ctx.suggestions.find(s => s.suggestion === suggestion);

    if (!suggested) {
        return null;
    }

    return suggested;
};

export { getCategory, getProduct, getSuggestion };
