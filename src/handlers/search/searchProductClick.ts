/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = mse.context.getSearchInput();
    const searchResultsCtx = mse.context.getSearchResults();

    trackEvent({
        category: "search",
        action: "product-click",
        label: "<sku>",
        property: "<pageType>",
        value: "<search-bar | results-page | other>",
        contexts: [],
    });
};

export default handler;
