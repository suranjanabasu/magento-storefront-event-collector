/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const COLLECTOR_NAME = "magento_store_events";
export const SNOWPLOW_JS_URL = "https://commerce.adobedtm.com/sp/v2/sp.js";

const magentoStoreEvents = window[COLLECTOR_NAME];

const createCollector = (
    p: any,
    l: any,
    o: any,
    w: any,
    i: any,
    n: any,
    g: any,
): void => {
    if (!p[i]) {
        p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
        p.GlobalSnowplowNamespace.push(i);
        p[i] = function () {
            // eslint-disable-next-line @typescript-eslint/no-extra-semi
            (p[i].q = p[i].q || []).push(p, l, o, w, i, n, g);
        };
        p[i].q = p[i].q || [];
        n = l.createElement(o);
        g = l.getElementsByTagName(o)[0];
        n.async = 1;
        n.src = w;
        g.parentNode.insertBefore(n, g);
    }
};

const configureCollector = (): void => {
    magentoStoreEvents(
        "newTracker",
        "magento-storefront-js",
        process.env.SNOWPLOW_URL,
        {
            appId: process.env.SNOWPLOW_APP_ID,
            platform: "web",
            cookieDomain: null,
            eventMethod:
                typeof navigator.sendBeacon === "function" ? "beacon" : "post",
            discoverRootDomain: true,
            cookieName: "mg",
            encodeBase64: false,
            respectDoNotTrack: false,
            userFingerprint: true,
            userFingerprintSeed: 7089491512,
            pageUnloadTimer: 500,
            forceSecureTracker: true,
            bufferSize: 1,
            postPath: process.env.SNOWPLOW_COLLECTOR,
            maxPostBytes: 45000,
            cookieLifetime: 63072000, // 1 year
            stateStorageStrategy: "localStorage",
            contexts: {
                webPage: true,
                performanceTiming: true,
            },
        },
    );

    magentoStoreEvents("enableLinkClickTracking");
    magentoStoreEvents("setOptOutCookie", "mg_dnt");
};

export { createCollector, configureCollector };
