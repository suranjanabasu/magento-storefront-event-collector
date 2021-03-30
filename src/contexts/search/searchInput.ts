/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";

import schemas from "../../schemas";

const createContext = (): Context => {
    const searchInput = mse.context.getSearchInput();

    const context = {
        schema: schemas.SEARCH_INPUT_SCHEMA_URL,
        data: {
            source: searchInput.source,
            query: searchInput.query,
            page: searchInput.page,
            perPage: searchInput.perPage,
            refinementAttribute: searchInput.refinementAttribute,
            refinementSelection: searchInput.refinementSelection,
            sortType: searchInput.sortType,
            sortOrder: searchInput.sortOrder,
        },
    };

    return context;
};

export default createContext;
