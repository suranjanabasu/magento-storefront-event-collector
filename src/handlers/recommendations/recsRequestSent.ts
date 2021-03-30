/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { trackEvent } from "../../snowplow";

const handler = (): void => {
    trackEvent({
        category: "recommendation-unit",
        action: "api-request-sent",
        label: "",
        property: "<pageType>",
        contexts: [],
    });
};

export default handler;
