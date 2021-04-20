/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { trackStructEvent } from "@snowplow/browser-tracker";

import { createProductCtx } from "../contexts";

const handler = (event: Event): void => {
    const { pageContext, productContext } = event.eventInfo;
    const productCtx = createProductCtx(productContext);

    trackStructEvent({
        category: "product",
        action: "add-to-cart",
        property: pageContext.pageType,
        context: [productCtx],
    });
};

export default handler;
