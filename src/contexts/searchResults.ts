/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { getSearchResultUnit } from "../utils/search";

const createContext = (
    searchUnitId: string,
    searchResults?: SearchResults,
): SearchResultsContext | null => {
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    const searchResultsUnit = getSearchResultUnit(
        searchUnitId,
        searchResultsCtx,
    );

    if (!searchResultsUnit) {
        return null;
    }

    const context: SearchResultsContext = {
        schema: schemas.SEARCH_RESULTS_SCHEMA_URL,
        data: {
            searchUnitId: searchResultsUnit.searchUnitId,
            searchRequestId: searchResultsUnit.searchRequestId,
            products: searchResultsUnit.products,
            categories: searchResultsUnit.categories,
            suggestions: searchResultsUnit.suggestions,
            productCount: searchResultsUnit.products.length,
            categoryCount: searchResultsUnit.categories.length,
            suggestionCount: searchResultsUnit.suggestions.length,
            page: searchResultsUnit.page,
            perPage: searchResultsUnit.perPage,
            facets: searchResultsUnit.facets,
        },
    };

    return context;
};

export default createContext;
