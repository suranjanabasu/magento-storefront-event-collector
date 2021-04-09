/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../../schemas";

const createContext = (
    searchResults?: SearchResults,
): SearchResultCategoryContext => {
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    const category = searchResultsCtx.categories[0];

    const context = {
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
