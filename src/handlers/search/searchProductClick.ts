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
    createSearchResultProductCtx,
    createSearchResultsCtx,
} from "../../contexts";

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

    const context: Array<SelfDescribingJson> = [
        searchInputCtx,
        searchResultsCtx,
    ];

    if (searchResultsProductCtx) {
        context.push(searchResultsProductCtx);
    }

    trackStructEvent({
        category: "search",
        action: "product-click",
        label: searchResultsProductCtx?.data.sku,
        property: pageContext.pageType,
        context,
    });
};

export default handler;
