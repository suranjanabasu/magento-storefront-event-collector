/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { trackStructEvent } from "@snowplow/browser-tracker";

import { createShoppingCartCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { pageContext, shoppingCartContext } = event.eventInfo;
    const shoppingCartCtx = createShoppingCartCtx(shoppingCartContext);

    trackStructEvent({
        category: "shopping-cart",
        action: "view",
        property: pageContext.pageType,
        // TODO: this should be the cartId, which is a string,
        //       but Snowplow expects a number for value.
        value: 0,
        context: [shoppingCartCtx],
    });
};

export default handler;
