/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { trackStructEvent } from "@snowplow/browser-tracker";

import { createSearchInputCtx, createSearchResultsCtx } from "../../contexts";

const handler = (event: Event): void => {
    const {
        pageContext,
        searchInputContext,
        searchResultsContext,
    } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(searchInputContext);
    const searchResultsCtx = createSearchResultsCtx(searchResultsContext);

    trackStructEvent({
        category: "search",
        action: "api-response-received",
        label: searchInputCtx.data.query,
        property: pageContext.pageType,
        context: [searchInputCtx, searchResultsCtx],
    });
};

export default handler;
