/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { analytics } from "../analytics";

const handler = (): void => {
    analytics.track("searchResultClick", {
        category: "search",
        action: "searchResultClick",
        label: "<selectedValue>",
        property: "<pageType>",
        value: "<product|category|suggestion>",
        contexts: [],
    });
};

export default handler;
