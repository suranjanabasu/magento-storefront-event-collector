/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { createProductCtx } from "../contexts";
import { trackEvent } from "../snowplow";

const handler = (): void => {
    const productCtx = createProductCtx();

    trackEvent({
        category: "product",
        action: "add-to-cart",
        property: "<pageType>",
        contexts: [productCtx],
    });
};

export default handler;
