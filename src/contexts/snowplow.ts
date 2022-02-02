import { ContextPrimitive } from "@snowplow/tracker-core";

import {
    createMagentoExtensionCtx,
    createShopperCtx,
    createStorefrontInstanceCtx,
    createTrackerCtx,
} from ".";

const createContext = (): Array<ContextPrimitive> => {
    const contexts = [
        () => createTrackerCtx(),
        () => createStorefrontInstanceCtx(),
        () => createMagentoExtensionCtx(),
        () => createShopperCtx(),
    ];

    return contexts;
};

export default createContext;
