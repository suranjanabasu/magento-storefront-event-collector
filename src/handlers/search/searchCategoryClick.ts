/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    createSearchInputCtx,
    createSearchResultCategoryCtx,
    createSearchResultsCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();
    const searchResultsCategoryCtx = createSearchResultCategoryCtx();

    trackEvent({
        category: "search",
        action: "category-click",
        label: searchResultsCategoryCtx.data.url,
        property: "<pageType>",
        contexts: [searchInputCtx, searchResultsCtx, searchResultsCategoryCtx],
    });
};

export default handler;
