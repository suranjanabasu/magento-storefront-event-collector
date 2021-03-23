/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { trackEvent } from "../../snowplow";

const handler = (): void => {
    trackEvent({
        category: "search",
        action: "category-click",
        label: "<categoryUrlKey>",
        property: "<pageType>",
        value: "<search-bar | results-page | other>",
        contexts: [],
    });
};

export default handler;
