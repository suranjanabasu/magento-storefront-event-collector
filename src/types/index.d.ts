import { MagentoStorefrontEvents } from "@adobe/magento-storefront-events-sdk";

declare global {
    const SNOWPLOW_COLLECTOR_URL: string;
    const SNOWPLOW_COLLECTOR_PATH: string;

    interface Window {
        magentoStorefrontEvents: MagentoStorefrontEvents;
        alloy: any;
    }
}
