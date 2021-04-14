/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createProductCtx } from "../contexts";
import { trackEvent } from "../snowplow";

const handler = (event: Event): void => {
    const { pageContext, productContext } = event.eventInfo;
    const productCtx = createProductCtx(productContext);

    trackEvent({
        category: "product",
        action: "view",
        property: pageContext.pageType,
        contexts: [productCtx],
    });
};

export default handler;
