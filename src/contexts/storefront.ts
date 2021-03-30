/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../schemas";

const createContext = (): StorefrontContext => {
    const storefrontInstanceCtx = mse.context.getStorefrontInstance();

    const context = {
        schema: schemas.STOREFRONT_INSTANCE_SCHEMA_URL,
        data: {
            baseCurrencyCode: storefrontInstanceCtx.baseCurrencyCode,
            environment: storefrontInstanceCtx.environment,
            environmentId: storefrontInstanceCtx.environmentId,
            instanceId: storefrontInstanceCtx.instanceId,
            storeCode: storefrontInstanceCtx.storeCode,
            storeId: storefrontInstanceCtx.storeId,
            storeName: storefrontInstanceCtx.storeName,
            storeUrl: storefrontInstanceCtx.storeUrl,
            storeViewCode: storefrontInstanceCtx.storeViewCode,
            storeViewCurrencyCode: storefrontInstanceCtx.storeViewCurrencyCode,
            storeViewId: storefrontInstanceCtx.storeViewId,
            storeViewName: storefrontInstanceCtx.storeViewName,
            websiteCode: storefrontInstanceCtx.websiteCode,
            websiteName: storefrontInstanceCtx.websiteName,
            websiteId: storefrontInstanceCtx.websiteId,
        },
    };

    return context;
};

export default createContext;
