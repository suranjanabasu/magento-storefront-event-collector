/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createSearchInputCtx, createSearchResultsCtx } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const pageCtx = event.eventInfo.pageContext;
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();

    trackEvent({
        category: "search",
        action: "results-view",
        property: pageCtx.pageType,
        contexts: [searchInputCtx, searchResultsCtx],
    });
};

export default handler;
