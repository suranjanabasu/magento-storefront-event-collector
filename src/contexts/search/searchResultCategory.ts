/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";
import { SEARCH_RESULT_CATEGORY_SCHEMA_URL } from "../../schemas";

const createContext = (): Context => {
    const searchResults = mse.context.getSearchResults();
    const category = searchResults.categories[0];

    const context = {
        schema: SEARCH_RESULT_CATEGORY_SCHEMA_URL,
        data: {
            name: category.name,
            url: category.url,
            rank: category.rank,
        },
    };

    return context;
};

export default createContext;
