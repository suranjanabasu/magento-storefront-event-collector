import { MagentoStorefrontEvents } from "@adobe/magento-storefront-events-sdk";

declare global {
    interface Window {
        magentoStorefrontEvents: MagentoStorefrontEvents;
    }
}
