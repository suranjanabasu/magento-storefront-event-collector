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
    createSearchResultCategoryCtx,
    createSearchResultsCtx,
} from "../../contexts";

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

    const context: Array<SelfDescribingJson> = [
        searchInputCtx,
        searchResultsCtx,
    ];

    if (searchResultsCategoryCtx) {
        context.push(searchResultsCategoryCtx);
    }

    trackStructEvent({
        category: "search",
        action: "category-click",
        label: searchResultsCategoryCtx?.data.url,
        property: pageContext.pageType,
        context,
    });
};

export default handler;
