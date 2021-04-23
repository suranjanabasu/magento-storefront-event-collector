/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { getProduct } from "../utils/search";

const createContext = (
    sku: string,
    searchResults?: SearchResults,
): SearchResultProductContext | null => {
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    const product = getProduct(sku, searchResultsCtx);

    if (!product) {
        return null;
    }

    const context: SearchResultProductContext = {
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
