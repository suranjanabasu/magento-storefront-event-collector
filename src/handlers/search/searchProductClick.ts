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
    const {
        sku,
        pageContext,
        searchInputContext,
        searchResultsContext,
    } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(searchInputContext);
    const searchResultsCtx = createSearchResultsCtx(searchResultsContext);
    const searchResultsProductCtx = createSearchResultProductCtx(
        sku as string,
        searchResultsContext,
    );

    const contexts: Array<SnowplowContext> = [searchInputCtx, searchResultsCtx];

    if (searchResultsProductCtx) {
        contexts.push(searchResultsProductCtx);
    }

    trackEvent({
        category: "search",
        action: "product-click",
        label: searchResultsProductCtx?.data.sku,
        property: pageContext.pageType,
        contexts,
    });
};

export default handler;
