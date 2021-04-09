/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { SearchResults } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../../schemas";

const createContext = (
    searchResults?: SearchResults,
): SearchResultSuggestionContext => {
    const searchResultsCtx = searchResults ?? mse.context.getSearchResults();
    const suggestion = searchResultsCtx.suggestions[0];

    const context = {
        schema: schemas.SEARCH_RESULT_SUGGESTION_SCHEMA_URL,
        data: {
            suggestion: suggestion.suggestion,
            rank: suggestion.rank,
        },
    };

    return context;
};

export default createContext;
