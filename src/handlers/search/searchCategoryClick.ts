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
        searchUnitId,
        name,
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

    const searchResultsCategoryCtx = createSearchResultCategoryCtx(
        searchUnitId as string,
        name as string,
        searchResultsContext,
    );

    const context: Array<SelfDescribingJson> = [];

    if (searchInputCtx) {
        context.push(searchInputCtx);
    }

    if (searchResultsCtx) {
        context.push(searchResultsCtx);
    }

    if (searchResultsCategoryCtx) {
        context.push(searchResultsCategoryCtx);
    }

    trackStructEvent({
        category: "search",
        action: "category-click",
        label: searchResultsCategoryCtx?.data.url as string,
        property: pageContext?.pageType,
        context,
    });
};

export default handler;
