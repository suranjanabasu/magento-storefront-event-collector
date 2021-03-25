/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { createSearchInputContext } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputContext();

    trackEvent({
        category: "search",
        action: "api-request-sent",
        label: "<query>",
        property: "<pageType>",
        contexts: [searchInputCtx],
    });
};

export default handler;
