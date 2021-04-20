/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { SelfDescribingJson } from "@snowplow/tracker-core";

import {
    createMagentoExtensionCtx,
    createShopperCtx,
    createShoppingCartCtx,
    createStorefrontInstanceCtx,
    createTrackerCtx,
} from ".";

const createContext = (): Array<SelfDescribingJson> => {
    const magentoExtensionCtx = createMagentoExtensionCtx();
    const shopperCtx = createShopperCtx();
    const shoppingCartCtx = createShoppingCartCtx();
    const storefrontInstanceCtx = createStorefrontInstanceCtx();
    const trackerCtx = createTrackerCtx();

    const contexts = [
        magentoExtensionCtx,
        shopperCtx,
        shoppingCartCtx,
        storefrontInstanceCtx,
        trackerCtx,
    ];

    return contexts;
};

export default createContext;
