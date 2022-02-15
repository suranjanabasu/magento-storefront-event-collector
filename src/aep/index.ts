import { subscribeToAEPEvents } from "./events";

/* 
   consider sticking this on a web worker and falling back to the window if web
   workers are not supported in the browser
*/

// configure alloy here

const MAGENTO_STOREFRONT_EVENTS_SDK = "magento-storefront-events-sdk";

const handleMessage = (event: MessageEvent) => {
    // skip other messages
    if (event.data !== MAGENTO_STOREFRONT_EVENTS_SDK) {
        return;
    }

    // do nothing if sdk is still not available
    if (!window.magentoStorefrontEvents) {
        return;
    }

    subscribeToAEPEvents();

    // clean up listener
    window.removeEventListener("message", subscribeToAEPEvents);
};

if (window.magentoStorefrontEvents) {
    subscribeToAEPEvents();
} else {
    window.addEventListener("message", handleMessage, false);
}

export * from "./events";
