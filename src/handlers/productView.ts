/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import { createProductCtx } from "../contexts";
import { trackEvent } from "../snowplow";

const handler = (): void => {
    const productCtx = createProductCtx();
    const pageCtx = mse.context.getPage();

    trackEvent({
        category: "product",
        action: "view",
        property: pageCtx.pageType,
        contexts: [productCtx],
    });
};

export default handler;
