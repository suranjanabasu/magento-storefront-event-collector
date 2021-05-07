/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { getCategory, getSearchResultUnit } from "../utils/search";

const createContext = (
    searchUnitId: string,
    name: string,
    searchResults?: SearchResults,
): SearchResultCategoryContext | null => {
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    const searchResultUnit = getSearchResultUnit(
        searchUnitId,
        searchResultsCtx,
    );

    if (!searchResultUnit) {
        return null;
    }

    const category = getCategory(name, searchResultUnit);

    if (!category) {
        return null;
    }

    const context: SearchResultCategoryContext = {
        schema: schemas.SEARCH_RESULT_CATEGORY_SCHEMA_URL,
        data: {
            name: category.name,
            url: category.url,
            rank: category.rank,
        },
    };

    return context;
};

export default createContext;
