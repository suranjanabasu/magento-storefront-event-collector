/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../../schemas";

const createContext = (): SearchInputContext => {
    const searchInputCtx = mse.context.getSearchInput();

    const context = {
        schema: schemas.SEARCH_INPUT_SCHEMA_URL,
        data: {
            source: searchInputCtx.source ?? undefined,
            query: searchInputCtx.query,
            page: searchInputCtx.page,
            perPage: searchInputCtx.perPage,
            refinementAttribute: searchInputCtx.refinementAttribute,
            refinementSelection: searchInputCtx.refinementSelection,
            sortType: searchInputCtx.sortType,
            sortOrder: searchInputCtx.sortOrder,
        },
    };

    return context;
};

export default createContext;
