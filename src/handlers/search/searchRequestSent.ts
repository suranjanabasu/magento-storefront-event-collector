/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { createSearchInputCtx } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputCtx();

    trackEvent({
        category: "search",
        action: "api-request-sent",
        label: searchInputCtx.data.query,
        property: "<pageType>",
        contexts: [searchInputCtx],
    });
};

export default handler;
