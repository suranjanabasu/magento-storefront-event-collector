/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { PerformanceTimingPlugin } from "@snowplow/browser-plugin-performance-timing";
import {
    addGlobalContexts,
    enableActivityTracking,
    newTracker,
    setOptOutCookie,
    TrackerConfiguration,
} from "@snowplow/browser-tracker";

import { createGlobalCtx } from "./contexts";

type ConfigureSnowplowParams = {
    appId: string;
    collectorUrl: string;
};

const configureSnowplow = ({
    appId,
    collectorUrl,
}: ConfigureSnowplowParams): void => {
    const configuration: TrackerConfiguration = {
        appId,
        platform: "web",
        discoverRootDomain: true,
        cookieName: "mg",
        encodeBase64: true,
        respectDoNotTrack: false,
        sessionCookieTimeout: 1800,
        eventMethod: "beacon",
        bufferSize: 1,
        maxPostBytes: 40000,
        crossDomainLinker: undefined,
        cookieLifetime: 86400 * 365 * 2,
        stateStorageStrategy: "localStorage",
        // TODO: use webpack define plugin for this
        // postPath: "/collector/tp2",
        contexts: {
            webPage: true,
        },
        plugins: [PerformanceTimingPlugin()],
    };

    newTracker("sp", collectorUrl, configuration);

    const globalCtx = createGlobalCtx();
    addGlobalContexts(globalCtx);

    setOptOutCookie("mg_dnt");

    // TODO: do we need enableActivityTrackingCallback?
    enableActivityTracking({
        minimumVisitLength: 5,
        heartbeatDelay: 5,
    });
};

export { configureSnowplow };
