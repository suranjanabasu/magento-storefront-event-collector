/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import {
    createSearchInputCtx,
    createSearchResultCategoryCtx,
    createSearchResultsCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const {
        name,
        pageContext,
        searchInputContext,
        searchResultsContext,
    } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(searchInputContext);
    const searchResultsCtx = createSearchResultsCtx(searchResultsContext);
    const searchResultsCategoryCtx = createSearchResultCategoryCtx(
        name as string,
        searchResultsContext,
    );

    const contexts: Array<SnowplowContext> = [searchInputCtx, searchResultsCtx];

    if (searchResultsCategoryCtx) {
        contexts.push(searchResultsCategoryCtx);
    }

    trackEvent({
        category: "search",
        action: "category-click",
        label: searchResultsCategoryCtx?.data.url,
        property: pageContext.pageType,
        contexts,
    });
};

export default handler;
