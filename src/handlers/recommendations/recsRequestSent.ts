/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const pageCtx = mse.context.getPage();

    trackEvent({
        category: "recommendation-unit",
        action: "api-request-sent",
        property: pageCtx.pageType,
    });
};

export default handler;
