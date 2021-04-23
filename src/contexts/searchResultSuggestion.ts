/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { getSuggestion } from "../utils/search";

const createContext = (
    suggestion: string,
    searchResults?: SearchResults,
): SearchResultSuggestionContext | null => {
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();

    const suggested = getSuggestion(suggestion, searchResultsCtx);

    if (!suggested) {
        return null;
    }

    const context: SearchResultSuggestionContext = {
        schema: schemas.SEARCH_RESULT_SUGGESTION_SCHEMA_URL,
        data: {
            suggestion: suggested.suggestion,
            rank: suggested.rank,
        },
    };

    return context;
};

export default createContext;
