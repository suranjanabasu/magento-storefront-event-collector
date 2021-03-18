/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import Analytics from "analytics";
import snowplowPlugin from "@analytics/snowplow";

const analytics = Analytics({
    app: "magento-storefront-js",
    plugins: [
        snowplowPlugin({
            name: "magento-storefront-js",
            scriptSrc: "https://commerce.adobedtm.com/sp/v2/sp.js",
            collectorUrl: "com-magento-qa1.collector.snplow.net",
            trackerSettings: {
                appId: "magento-ds",
                platform: "web",
                cookieDomain: null,
                eventMethod:
                    typeof navigator.sendBeacon === "function"
                        ? "beacon"
                        : "post",
                discoverRootDomain: true,
                cookieName: "mg",
                encodeBase64: false,
                respectDoNotTrack: false,
                userFingerprint: true,
                userFingerprintSeed: 7089491512,
                pageUnloadTimer: 500,
                forceSecureTracker: true,
                bufferSize: 1,
                postPath: "/collector/tp2",
                maxPostBytes: 45000,
                cookieLifetime: 63072000, // 1 year
                stateStorageStrategy: "localStorage",
                contexts: {
                    webPage: true,
                    performanceTiming: true,
                },
            },
        }),
    ],
});

analytics.on("initialize:snowplow", ({ instance }) => {
    instance.plugins.snowplow.enableLinkClickTracking();
    instance.plugins.snowplow.enableActivityTracking(5, 5);

    // TODO: implement these
    // magentoStoreEvents("setOptOutCookie", "mg_dnt");
    // magento_store_events("addGlobalContexts", contexts);
    // magento_store_events(
    //     "enableActivityTrackingCallback",
    //     5,
    //     PING_INTERVAL,
    //     onActivity,
    // );
    // magento_store_events("setOptOutCookie", DNT_COOKIE);
    // magento_store_events("trackPageView", null);
});

export { analytics };
