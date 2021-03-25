/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    createMagentoExtensionCtx,
    createShopperCtx,
    createShoppingCartCtx,
    createStorefrontInstanceCtx,
    createTrackerCtx,
} from "./contexts";
import { plowing } from "./plowing";

const initializeSnowplow = (spUrl: string): void => {
    plowing(spUrl);
};

type ConfigureSnowplowParams = {
    appId: string;
    collectorUrl: string;
};

const configureSnowplow = ({
    appId,
    collectorUrl,
}: ConfigureSnowplowParams): void => {
    window.snowplow("newTracker", "sp", collectorUrl, {
        appId,
        platform: "web",
        discoverRootDomain: true,
        cookieName: "mg",
        encodeBase64: true,
        respectDoNotTrack: false,
        userFingerprint: true,
        userFingerprintSeed: 7089491512,
        pageUnloadTimer: 500,
        forceSecureTracker: true,
        sessionCookieTimeout: 1800,
        eventMethod: "beacon",
        bufferSize: 1,
        maxPostBytes: 40000,
        crossDomainLinker: null,
        cookieLifetime: 86400 * 365 * 2,
        stateStorageStrategy: "localStorage",
        // postPath: "/collector/tp2",
        contexts: {
            webPage: true,
            performanceTiming: true,
            gaCookies: false,
            geolocation: false,
        },
    });

    const magentoExtensionCtx = createMagentoExtensionCtx();
    const shopperCtx = createShopperCtx();
    const shoppingCartCtx = createShoppingCartCtx();
    const storefrontInstanceCtx = createStorefrontInstanceCtx();
    const trackerCtx = createTrackerCtx();

    window.snowplow("addGlobalContexts", [
        magentoExtensionCtx,
        shopperCtx,
        shoppingCartCtx,
        storefrontInstanceCtx,
        trackerCtx,
    ]);
};

type TrackEventParams = {
    category: string;
    action: string;
    label: string;
    property: string;
    value?: number;
    contexts: unknown[];
};

const trackEvent = ({
    category,
    action,
    label,
    property,
    value,
    contexts,
}: TrackEventParams): void => {
    window.snowplow(
        "trackStructEvent",
        category,
        action,
        label,
        property,
        value,
        contexts,
    );
};

export { configureSnowplow, initializeSnowplow, trackEvent };
