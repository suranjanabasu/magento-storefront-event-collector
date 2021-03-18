/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

/* eslint-disable no-console */

import magentoStorefrontEvents from "@adobe/magento-storefront-events-sdk";

const subscribeToEvents = (): void => {
    magentoStorefrontEvents.subscribe.addToCart(() =>
        console.log("addToCart handler"),
    );
    magentoStorefrontEvents.subscribe.customUrl(() =>
        console.log("customUrl handler"),
    );
    magentoStorefrontEvents.subscribe.dataLayerChange(() =>
        console.log("dataLayerChange handler"),
    );
    magentoStorefrontEvents.subscribe.dataLayerEvent(() =>
        console.log("dataLayerEvent handler"),
    );
    magentoStorefrontEvents.subscribe.initiateCheckout(() =>
        console.log("initiateCheckout handler"),
    );
    magentoStorefrontEvents.subscribe.pageActivitySummary(() =>
        console.log("pageActivitySummary handler"),
    );
    magentoStorefrontEvents.subscribe.pageView(() =>
        console.log("pageView handler"),
    );
    magentoStorefrontEvents.subscribe.placeOrder(() =>
        console.log("placeOrder handler"),
    );
    magentoStorefrontEvents.subscribe.productPageView(() =>
        console.log("productPageView handler"),
    );
    magentoStorefrontEvents.subscribe.referrerUrl(() =>
        console.log("referrerUrl handler"),
    );
    magentoStorefrontEvents.subscribe.removeFromCart(() =>
        console.log("removeFromCart handler"),
    );
    magentoStorefrontEvents.subscribe.searchRequestSent(() =>
        console.log("searchRequestSent handler"),
    );
    magentoStorefrontEvents.subscribe.searchResponseReceived(() =>
        console.log("searchResponseReceived handler"),
    );
    magentoStorefrontEvents.subscribe.searchResultClick(() =>
        console.log("searchResultClick handler"),
    );
    magentoStorefrontEvents.subscribe.signIn(() =>
        console.log("signIn handler"),
    );
    magentoStorefrontEvents.subscribe.signOut(() =>
        console.log("signOut handler"),
    );
    magentoStorefrontEvents.subscribe.updateCart(() =>
        console.log("updateCart handler"),
    );
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
