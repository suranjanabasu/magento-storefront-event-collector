/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { createSearchInputCtx, createSearchResultsCtx } from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();

    trackEvent({
        category: "search",
        action: "results-view",
        property: "<pageType>",
        contexts: [searchInputCtx, searchResultsCtx],
    });
};

export default handler;
