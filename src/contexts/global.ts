/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { ContextPrimitive } from "@snowplow/tracker-core";

import {
    createMagentoExtensionCtx,
    createShopperCtx,
    createStorefrontInstanceCtx,
    createTrackerCtx,
} from ".";

const createContext = (): Array<ContextPrimitive> => {
    const magentoExtensionCtx = createMagentoExtensionCtx();
    const storefrontInstanceCtx = createStorefrontInstanceCtx();
    const trackerCtx = createTrackerCtx();

    const contexts = [
        // static contexts
        trackerCtx,
        magentoExtensionCtx,
        storefrontInstanceCtx,

        // dynamic contexts
        () => createShopperCtx(),
    ];

    return contexts;
};

export default createContext;
