/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import {
    createSearchInputCtx,
    createSearchResultCategoryCtx,
    createSearchResultsCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const pageCtx = mse.context.getPage();
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
