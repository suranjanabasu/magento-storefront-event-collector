/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    createSearchInputCtx,
    createSearchResultsCtx,
    createSearchResultSuggestionCtx,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputCtx();
    const searchResultsCtx = createSearchResultsCtx();
    const searchResultsSuggestionCtx = createSearchResultSuggestionCtx();

    trackEvent({
        category: "search",
        action: "suggestion-click",
        label: "<suggestion>",
        property: "<pageType>",
        contexts: [
            searchInputCtx,
            searchResultsCtx,
            searchResultsSuggestionCtx,
        ],
    });
};

export default handler;
