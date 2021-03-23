/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    createSearchInputContext,
    createSearchResultsContext,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputContext();
    const searchResultsCtx = createSearchResultsContext();

    trackEvent({
        category: "search",
        action: "results-view",
        label: "",
        property: "<pageType>",
        contexts: [searchInputCtx, searchResultsCtx],
    });
};

export default handler;
