/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import { createSearchInputCtx } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const pageCtx = mse.context.getPage();
    const searchInputCtx = createSearchInputCtx();

    trackEvent({
        category: "search",
        action: "api-request-sent",
        label: searchInputCtx.data.query,
        property: pageCtx.pageType,
        contexts: [searchInputCtx],
    });
};

export default handler;
