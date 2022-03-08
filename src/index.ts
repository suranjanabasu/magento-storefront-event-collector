import { alloy } from "./alloy";
import { subscribeToEvents } from "./events";
import { configureSnowplow } from "./snowplow";

const initialize = async () => {
    configureSnowplow({
        appId: "magento-storefront-event-collector",
        collectorUrl: SNOWPLOW_COLLECTOR_URL,
        collectorPath: SNOWPLOW_COLLECTOR_PATH,
    });
    await alloy.configure();
    subscribeToEvents();
};

const handleMessage = (event: MessageEvent) => {
    // skip other messages
    if (event.data !== "magento-storefront-events-sdk") {
        return;
    }

    // do nothing if sdk is still not available
    if (!window.magentoStorefrontEvents) {
        return;
    }

    initialize();

    // clean up listener
    window.removeEventListener("message", initialize);
};

if (window.magentoStorefrontEvents) {
    initialize();
} else {
    window.addEventListener("message", handleMessage, false);
}

export * from "./events";
export * from "./snowplow";
