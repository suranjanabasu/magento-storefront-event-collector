/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import {
    createSearchInputCtx,
    createSearchResultsCtx,
    createSearchResultSuggestionCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const pageCtx = mse.context.getPage();
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();
    const searchResultsSuggestionCtx = createSearchResultSuggestionCtx();

    trackEvent({
        category: "search",
        action: "suggestion-click",
        label: searchResultsSuggestionCtx.data.suggestion,
        property: pageCtx.pageType,
        contexts: [
            searchInputCtx,
            searchResultsCtx,
            searchResultsSuggestionCtx,
        ],
    });
};

export default handler;
