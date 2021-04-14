import {
    SearchInput,
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

const createFilters = (ctx: SearchInput): Array<SearchFilter> => {
    const filters = ctx.filters.flatMap(filter => {
        const filters: Array<SearchFilter> = [];

        // eq
        if (filter.eq) {
            filters.push({
                name: filter.attribute,
                values: [filter.eq],
                operator: "eq",
            });
        }

        // in
        if (filter.in?.length) {
            filters.push({
                name: filter.attribute,
                values: filter.in,
                operator: "in",
            });
        }

        // range
        if (filter.range) {
            const values: SearchFilter["values"] = [];

            if (filter.range?.from) {
                values.push(filter.range?.from?.toString());
            }

            if (filter.range?.to) {
                values.push(filter.range?.to?.toString());
            }

            filters.push({
                name: filter.attribute,
                values,
                operator: "range",
            });
        }

        return filters;
    });

    return filters;
};

export { createFilters, getCategory, getProduct, getSuggestion };
