/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";
import { SEARCH_RESULT_PRODUCT_SCHEMA_URL } from "../../schemas";

const createContext = (): Context => {
    const searchResults = mse.context.getSearchResults();
    const product = searchResults.products[0];

    const context = {
        schema: SEARCH_RESULT_PRODUCT_SCHEMA_URL,
        data: {
            name: product.name,
            sku: product.sku,
            url: product.url,
            imageUrl: product.imageUrl,
            price: product.price,
            rank: product.rank,
        },
    };

    return context;
};

export default createContext;
