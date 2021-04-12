/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { trackEvent } from "../snowplow";

const handler = (event: Event): void => {
    const { pageContext } = event.eventInfo;

    trackEvent({
        category: "shopping-cart",
        action: "view",
        property: pageContext.pageType,
        // TODO: this should be the cartId, which is a string,
        //       but Snowplow expects a number for value.
        value: 0,
    });
};

export default handler;
