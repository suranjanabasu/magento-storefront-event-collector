/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchInput } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { createFilters, getSearchInputUnit } from "../utils/search";

const createContext = (
    searchUnitId: string,
    searchInput?: SearchInput,
): SearchInputContext | null => {
    const searchInputCtx = searchInput ?? mse.context.getSearchInput();
    const searchInputUnit = getSearchInputUnit(searchUnitId, searchInputCtx);

    if (!searchInputUnit) {
        return null;
    }

    const context: SearchInputContext = {
        schema: schemas.SEARCH_INPUT_SCHEMA_URL,
        data: {
            searchUnitId: searchInputUnit.searchUnitId,
            source: searchInputUnit.source ?? null,
            queryType: "all",
            searchRequestId: searchInputUnit.searchRequestId,
            query: searchInputUnit.query,
            page: searchInputUnit.page,
            perPage: searchInputUnit.perPage,
            filters: createFilters(searchInputUnit),
            sortType: searchInputUnit.sortType,
            sortOrder: searchInputUnit.sortOrder,
        },
    };

    return context;
};

export default createContext;
