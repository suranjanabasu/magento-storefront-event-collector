/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchInput } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { createFilters } from "../utils/search";

const createContext = (searchInput?: SearchInput): SearchInputContext => {
    const searchInputCtx = searchInput ?? mse.context.getSearchInput();

    const context = {
        schema: schemas.SEARCH_INPUT_SCHEMA_URL,
        data: {
            source: searchInputCtx.source ?? null,
            queryType: "all",
            searchRequestId: searchInputCtx.searchRequestId,
            query: searchInputCtx.query,
            page: searchInputCtx.page,
            perPage: searchInputCtx.perPage,
            filters: createFilters(searchInputCtx),
            sortType: searchInputCtx.sortType,
            sortOrder: searchInputCtx.sortOrder,
        },
    };

    return context;
};

export default createContext;
