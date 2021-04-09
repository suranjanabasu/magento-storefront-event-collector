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
    const pageCtx = event.eventInfo.pageContext;
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();
    const searchResultsCategoryCtx = createSearchResultCategoryCtx();

    trackEvent({
        category: "search",
        action: "category-click",
        label: searchResultsCategoryCtx.data.url,
        property: pageCtx.pageType,
        contexts: [searchInputCtx, searchResultsCtx, searchResultsCategoryCtx],
    });
};

export default handler;
