/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import "@adobe/adobe-client-data-layer";

import { subscribeToEvents } from "./events";
import { configureSnowplow } from "./snowplow";

configureSnowplow({
    appId: "magento-storefront-event-collector",
    collectorUrl: SNOWPLOW_COLLECTOR_URL,
    collectorPath: SNOWPLOW_COLLECTOR_PATH,
});

subscribeToEvents();

export * from "./events";
export * from "./snowplow";
