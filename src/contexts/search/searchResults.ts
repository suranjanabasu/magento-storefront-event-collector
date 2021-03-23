/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";
import { SEARCH_RESULTS_SCHEMA_URL } from "../../schemas";

const createContext = (): Context => {
    const searchResults = mse.context.getSearchResults();

    const context = {
        schema: SEARCH_RESULTS_SCHEMA_URL,
        data: {
            products: searchResults.products,
            categories: searchResults.categories,
            suggestions: searchResults.suggestions,
            productCount: searchResults.productCount,
            categoryCount: searchResults.categoryCount,
            suggestionCount: searchResults.suggestionCount,
            page: searchResults.page,
            perPage: searchResults.perPage,
        },
    };

    return context;
};

export default createContext;
