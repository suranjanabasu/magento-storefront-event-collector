/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createSearchInputCtx, createSearchResultsCtx } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const {
        pageContext,
        searchInputContext,
        searchResultsContext,
    } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(searchInputContext);
    const searchResultsCtx = createSearchResultsCtx(searchResultsContext);

    trackEvent({
        category: "search",
        action: "results-view",
        property: pageContext.pageType,
        contexts: [searchInputCtx, searchResultsCtx],
    });
};

export default handler;
