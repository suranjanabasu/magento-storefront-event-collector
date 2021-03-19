/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { analytics } from "../analytics";

const handler = (): void => {
    analytics.track("addToCart", {
        category: "product",
        action: "addToCart",
        label: "",
        property: "<pageType>",
        value: "",
        contexts: [],
    });
};

export default handler;
