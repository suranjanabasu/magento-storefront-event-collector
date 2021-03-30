/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../../schemas";

const createContext = (): SearchResultSuggestionContext => {
    const searchResultsCtx = mse.context.getSearchResults();
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
