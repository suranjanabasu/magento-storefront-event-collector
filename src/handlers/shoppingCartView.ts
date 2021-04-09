/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import { trackEvent } from "../snowplow";

const handler = (): void => {
    const pageType = mse.context.getPage();

    trackEvent({
        category: "shopping-cart",
        action: "view",
        property: pageType.pageType,
        // TODO: this should be the cartId, which is a string,
        //       but Snowplow expects a number for value.
        value: 0,
    });
};

export default handler;
