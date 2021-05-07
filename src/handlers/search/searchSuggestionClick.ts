/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    SelfDescribingJson,
    trackStructEvent,
} from "@snowplow/browser-tracker";

import {
    createSearchInputCtx,
    createSearchResultsCtx,
    createSearchResultSuggestionCtx,
} from "../../contexts";

const handler = (event: Event): void => {
    const {
        searchUnitId,
        suggestion,
        pageContext,
        searchInputContext,
        searchResultsContext,
    } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(
        searchUnitId as string,
        searchInputContext,
    );

    const searchResultsCtx = createSearchResultsCtx(
        searchUnitId as string,
        searchResultsContext,
    );

    const searchResultsSuggestionCtx = createSearchResultSuggestionCtx(
        searchUnitId as string,
        suggestion as string,
        searchResultsContext,
    );

    const context: Array<SelfDescribingJson> = [];

    if (searchInputCtx) {
        context.push(searchInputCtx);
    }

    if (searchResultsCtx) {
        context.push(searchResultsCtx);
    }

    if (searchResultsSuggestionCtx) {
        context.push(searchResultsSuggestionCtx);
    }

    trackStructEvent({
        category: "search",
        action: "suggestion-click",
        label: searchResultsSuggestionCtx?.data.suggestion,
        property: pageContext.pageType,
        context,
    });
};

export default handler;
