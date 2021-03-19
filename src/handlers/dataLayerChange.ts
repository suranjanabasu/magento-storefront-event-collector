/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { analytics } from "../analytics";

const handler = (): void => {
    analytics.track("dataLayerChange", {
        category: "category",
        action: "dataLayerChange",
        label: "label",
        property: "property",
        value: "value",
        contexts: [],
    });
};

export default handler;
