/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { trackEvent } from "../../snowplow";

const handler = (): void => {
    trackEvent({
        category: "search",
        action: "suggestion-click",
        label: "<suggestion>",
        property: "<pageType>",
        value: "<search-bar | results-page | other>",
        contexts: [],
    });
};

export default handler;
