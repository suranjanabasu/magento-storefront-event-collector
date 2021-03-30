/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../../schemas";

const createContext = (): SearchResultProductContext => {
    const searchResultsCtx = mse.context.getSearchResults();
    const product = searchResultsCtx.products[0];

    const context = {
        schema: schemas.SEARCH_RESULT_PRODUCT_SCHEMA_URL,
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
