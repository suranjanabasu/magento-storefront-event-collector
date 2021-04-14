/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const { pageContext } = event.eventInfo;

    trackEvent({
        category: "recommendation-unit",
        action: "api-request-sent",
        property: pageContext.pageType,
    });
};

export default handler;
