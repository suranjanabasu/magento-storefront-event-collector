/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    createSearchInputCtx,
    createSearchResultProductCtx,
    createSearchResultsCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();
    const searchResultsProductCtx = createSearchResultProductCtx();

    trackEvent({
        category: "search",
        action: "product-click",
        label: searchResultsProductCtx.data.sku,
        property: "<pageType>",
        contexts: [searchInputCtx, searchResultsCtx, searchResultsProductCtx],
    });
};

export default handler;
