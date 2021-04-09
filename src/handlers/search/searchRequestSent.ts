/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createSearchInputCtx } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const pageCtx = event.eventInfo.pageContext;
    const searchInputCtx = createSearchInputCtx();

    trackEvent({
        category: "search",
        action: "api-request-sent",
        label: searchInputCtx.data.query,
        property: pageCtx.pageType,
        contexts: [searchInputCtx],
    });
};

export default handler;
