/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";
import schemas from "../../schemas";

const createContext = (): Context => {
    const searchResults = mse.context.getSearchResults();
    const suggestion = searchResults.suggestions[0];

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
