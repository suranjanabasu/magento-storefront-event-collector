/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createProductCtx } from "../contexts";
import { trackEvent } from "../snowplow";

const handler = (event: Event): void => {
    const pageCtx = event.eventInfo.pageContext;
    const productCtx = createProductCtx();

    trackEvent({
        category: "product",
        action: "view",
        property: pageCtx.pageType,
        contexts: [productCtx],
    });
};

export default handler;
