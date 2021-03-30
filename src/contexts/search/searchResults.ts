/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../../schemas";

const createContext = (): SearchResultsContext => {
    const searchResultsCtx = mse.context.getSearchResults();

    const context = {
        schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
        data: {
            products: searchResultsCtx.products,
            categories: searchResultsCtx.categories,
            suggestions: searchResultsCtx.suggestions,
            productCount: searchResultsCtx.productCount,
            categoryCount: searchResultsCtx.categoryCount,
            suggestionCount: searchResultsCtx.suggestionCount,
            page: searchResultsCtx.page,
            perPage: searchResultsCtx.perPage,
        },
    };

    return context;
};

export default createContext;
