/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import {
    createSearchInputCtx,
    createSearchResultProductCtx,
    createSearchResultsCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const pageCtx = event.eventInfo.pageContext;
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();
    const searchResultsProductCtx = createSearchResultProductCtx();

    trackEvent({
        category: "search",
        action: "product-click",
        label: searchResultsProductCtx.data.sku,
        property: pageCtx.pageType,
        contexts: [searchInputCtx, searchResultsCtx, searchResultsProductCtx],
    });
};

export default handler;
