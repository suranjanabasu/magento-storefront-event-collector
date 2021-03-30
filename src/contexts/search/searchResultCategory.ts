/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../../schemas";

const createContext = (): SearchResultCategoryContext => {
    const searchResultsCtx = mse.context.getSearchResults();
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
