/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../../schemas";

const createContext = (searchResults?: SearchResults): SearchResultsContext => {
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    const context = {
        schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
        data: {
            searchRequestId: "abc123",
            products: searchResultsCtx.products,
            categories: searchResultsCtx.categories,
            suggestions: searchResultsCtx.suggestions,
            productCount: searchResultsCtx.productCount,
            categoryCount: searchResultsCtx.categoryCount,
            suggestionCount: searchResultsCtx.suggestionCount,
            page: searchResultsCtx.page,
            perPage: searchResultsCtx.perPage,
            facets: searchResultsCtx.facets,
        },
    };

    return context;
};

export default createContext;
