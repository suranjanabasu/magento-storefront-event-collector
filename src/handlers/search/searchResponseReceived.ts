/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import { createSearchInputCtx, createSearchResultsCtx } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const pageCtx = mse.context.getPage();
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();

    trackEvent({
        category: "search",
        action: "api-response-received",
        label: searchInputCtx.data.query,
        property: pageCtx.pageType,
        contexts: [searchInputCtx, searchResultsCtx],
    });
};

export default handler;
