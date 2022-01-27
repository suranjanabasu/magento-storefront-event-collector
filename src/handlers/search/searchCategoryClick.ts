/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createEventForwardingCtx } from "../../contexts";
import { EventForwardingContext } from "../../types/contexts";
import aepHandler from "./searchCategoryClickAEP";
import snowplowHandler from "./searchCategoryClickSnowplow";

const handler = (event: Event): void => {
    const { eventForwardingContext } = event.eventInfo;
    const eventForwardingCtx: EventForwardingContext = createEventForwardingCtx(
        eventForwardingContext,
    );

    if (eventForwardingCtx.aep) {
        aepHandler(event);
    }

    snowplowHandler(event);
};

export default handler;
