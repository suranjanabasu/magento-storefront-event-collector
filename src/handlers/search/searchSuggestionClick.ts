/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    createSearchInputContext,
    createSearchResultsContext,
    createSearchResultSuggestionContext,
} from "../../contexts";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const searchInputCtx = createSearchInputContext();
    const searchResultsCtx = createSearchResultsContext();
    const searchResultsSuggestionCtx = createSearchResultSuggestionContext();

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
