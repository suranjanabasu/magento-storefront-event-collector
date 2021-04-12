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
    const {
        suggestion,
        pageContext,
        searchInputContext,
        searchResultsContext,
    } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(searchInputContext);
    const searchResultsCtx = createSearchResultsCtx(searchResultsContext);
    const searchResultsSuggestionCtx = createSearchResultSuggestionCtx(
        suggestion as string,
        searchResultsContext,
    );

    const contexts: Array<SnowplowContext> = [searchInputCtx, searchResultsCtx];

    if (searchResultsSuggestionCtx) {
        contexts.push(searchResultsSuggestionCtx);
    }

    trackEvent({
        category: "search",
        action: "suggestion-click",
        label: searchResultsSuggestionCtx?.data.suggestion,
        property: pageContext.pageType,
        contexts,
    });
};

export default handler;
