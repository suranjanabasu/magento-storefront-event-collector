/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import {
    createSearchInputCtx,
    createSearchResultsCtx,
    createSearchResultSuggestionCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const pageCtx = event.eventInfo.pageContext;
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
