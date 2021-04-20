/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { trackStructEvent } from "@snowplow/browser-tracker";

import { createSearchInputCtx } from "../../contexts";

const handler = (event: Event): void => {
    const { pageContext, searchInputContext } = event.eventInfo;

    const searchInputCtx = createSearchInputCtx(searchInputContext);

    trackStructEvent({
        category: "search",
        action: "api-request-sent",
        label: searchInputCtx.data.query,
        property: pageContext.pageType,
        context: [searchInputCtx],
    });
};

export default handler;
