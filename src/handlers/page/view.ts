/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { createEventForwardingCtx } from "../../contexts";
import { EventForwardingContext } from "../../types/contexts";
import aepHandler from "./viewAEP";
import snowplowHandler from "./viewSnowplow";

const handler = (): void => {
    const eventForwardingCtx: EventForwardingContext =
        createEventForwardingCtx();

    if (eventForwardingCtx.aep) {
        aepHandler();
    }

    snowplowHandler();
};

export default handler;
