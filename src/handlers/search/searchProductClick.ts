/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    createSearchInputContext,
    createSearchResultProductContext,
    createSearchResultsContext,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputContext();
    const searchResultsCtx = createSearchResultsContext();
    const searchResultsProductCtx = createSearchResultProductContext();

    trackEvent({
        category: "search",
        action: "product-click",
        label: "<sku>",
        property: "<pageType>",
        contexts: [searchInputCtx, searchResultsCtx, searchResultsProductCtx],
    });
};

export default handler;
