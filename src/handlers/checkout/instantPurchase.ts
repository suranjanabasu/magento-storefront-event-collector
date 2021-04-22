/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { trackStructEvent } from "@snowplow/browser-tracker";

import { createProductCtx, createShoppingCartCtx } from "../../contexts";

const handler = (event: Event): void => {
    const {
        pageContext,
        orderContext,
        productContext,
        shoppingCartContext,
    } = event.eventInfo;

    const productCtx = createProductCtx(productContext);
    const shoppingCartCtx = createShoppingCartCtx(shoppingCartContext);

    trackStructEvent({
        category: "checkout",
        action: "instant-purchase",
        label: orderContext.orderId.toString(),
        property: pageContext.pageType,
        context: [productCtx, shoppingCartCtx],
    });
};

export default handler;
