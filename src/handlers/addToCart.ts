/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import { createProductCtx } from "../contexts";
import { trackEvent } from "../snowplow";

const handler = (): void => {
    const pageCtx = mse.context.getPage();
    const productCtx = createProductCtx();

    trackEvent({
        category: "product",
        action: "add-to-cart",
        property: pageCtx.pageType,
        contexts: [productCtx],
    });
};

export default handler;
