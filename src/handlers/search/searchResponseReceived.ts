/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchResultsCtx = mse.context.getSearchResults();

    trackEvent({
        category: "search",
        action: "api-response-received",
        label: "<query>",
        property: "<pageType>",
        value: "<search-bar | results-page | other>",
        contexts: [],
    });
};

export default handler;
