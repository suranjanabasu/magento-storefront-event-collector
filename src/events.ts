/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* eslint-disable no-console */

import magentoStorefrontEvents from "@adobe/magento-storefront-events-sdk";
import { analytics } from "./analytics";

const subscribeToEvents = (): void => {
    magentoStorefrontEvents.subscribe.addToCart(() => {
        analytics.track("addToCart");
    });

    magentoStorefrontEvents.subscribe.customUrl(() => {
        analytics.track("customUrl");
    });

    magentoStorefrontEvents.subscribe.dataLayerChange(() => {
        analytics.track("dataLayerChange");
    });

    magentoStorefrontEvents.subscribe.dataLayerEvent(() => {
        analytics.track("dataLayerEvent");
    });

    magentoStorefrontEvents.subscribe.initiateCheckout(() => {
        analytics.track("initiateCheckout");
    });

    magentoStorefrontEvents.subscribe.pageActivitySummary(() => {
        analytics.track("pageActivitySummary");
    });

    magentoStorefrontEvents.subscribe.pageView(() => {
        analytics.track("pageView");
    });

    magentoStorefrontEvents.subscribe.placeOrder(() => {
        analytics.track("placeOrder");
    });

    magentoStorefrontEvents.subscribe.productPageView(() => {
        analytics.track("productPageView");
    });

    magentoStorefrontEvents.subscribe.referrerUrl(() => {
        analytics.track("referrerUrl");
    });

    magentoStorefrontEvents.subscribe.removeFromCart(() => {
        analytics.track("removeFromCart");
    });

    magentoStorefrontEvents.subscribe.searchRequestSent(() => {
        analytics.track("searchRequestSent");
    });

    magentoStorefrontEvents.subscribe.searchResponseReceived(() => {
        analytics.track("searchResponseReceived");
    });

    magentoStorefrontEvents.subscribe.searchResultClick(() => {
        analytics.track("searchResultClick");
    });

    magentoStorefrontEvents.subscribe.signIn(() => {
        analytics.track("signIn");
    });

    magentoStorefrontEvents.subscribe.signOut(() => {
        analytics.track("signOut");
    });

    magentoStorefrontEvents.subscribe.updateCart(() => {
        analytics.track("updateCart");
    });
};

const unsubscribeFromEvents = (): void => {
    magentoStorefrontEvents.unsubscribe.addToCart(() =>
        console.log("addToCart handler"),
    );

    magentoStorefrontEvents.unsubscribe.customUrl(() =>
        console.log("customUrl handler"),
    );

    magentoStorefrontEvents.unsubscribe.dataLayerChange(() =>
        console.log("dataLayerChange handler"),
    );

    magentoStorefrontEvents.unsubscribe.dataLayerEvent(() =>
        console.log("dataLayerEvent handler"),
    );

    magentoStorefrontEvents.unsubscribe.initiateCheckout(() =>
        console.log("initiateCheckout handler"),
    );

    magentoStorefrontEvents.unsubscribe.pageActivitySummary(() =>
        console.log("pageActivitySummary handler"),
    );

    magentoStorefrontEvents.unsubscribe.pageView(() =>
        console.log("pageView handler"),
    );

    magentoStorefrontEvents.unsubscribe.placeOrder(() =>
        console.log("placeOrder handler"),
    );

    magentoStorefrontEvents.unsubscribe.productPageView(() =>
        console.log("productPageView handler"),
    );

    magentoStorefrontEvents.unsubscribe.referrerUrl(() =>
        console.log("referrerUrl handler"),
    );

    magentoStorefrontEvents.unsubscribe.removeFromCart(() =>
        console.log("removeFromCart handler"),
    );

    magentoStorefrontEvents.unsubscribe.searchRequestSent(() =>
        console.log("searchRequestSent handler"),
    );

    magentoStorefrontEvents.unsubscribe.searchResponseReceived(() =>
        console.log("searchResponseReceived handler"),
    );

    magentoStorefrontEvents.unsubscribe.searchResultClick(() =>
        console.log("searchResultClick handler"),
    );

    magentoStorefrontEvents.unsubscribe.signIn(() =>
        console.log("signIn handler"),
    );

    magentoStorefrontEvents.unsubscribe.signOut(() =>
        console.log("signOut handler"),
    );

    magentoStorefrontEvents.unsubscribe.updateCart(() =>
        console.log("updateCart handler"),
    );
};

export { subscribeToEvents, unsubscribeFromEvents };
