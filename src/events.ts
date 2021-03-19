/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import {
    addToCartHandler,
    customUrlHandler,
    dataLayerChangeHandler,
    dataLayerEventHandler,
    initiateCheckoutHandler,
    pageActivitySummaryHandler,
    pageViewHandler,
    placeOrderHandler,
    productPageViewHandler,
    referrerUrlHandler,
    removeFromCartHandler,
    searchRequestSentHandler,
    searchResponseReceivedHandler,
    searchResultClickHandler,
    signInHandler,
    signOutHandler,
    updateCartHandler,
} from "./handlers";

const subscribeToEvents = (): void => {
    mse.subscribe.addToCart(addToCartHandler);
    mse.subscribe.customUrl(customUrlHandler);
    // mse.subscribe.dataLayerChange(dataLayerChangeHandler);
    // mse.subscribe.dataLayerEvent(dataLayerEventHandler);
    mse.subscribe.initiateCheckout(initiateCheckoutHandler);
    mse.subscribe.pageActivitySummary(pageActivitySummaryHandler);
    mse.subscribe.pageView(pageViewHandler);
    mse.subscribe.placeOrder(placeOrderHandler);
    mse.subscribe.productPageView(productPageViewHandler);
    mse.subscribe.referrerUrl(referrerUrlHandler);
    mse.subscribe.removeFromCart(removeFromCartHandler);
    mse.subscribe.searchRequestSent(searchRequestSentHandler);
    mse.subscribe.searchResponseReceived(searchResponseReceivedHandler);
    mse.subscribe.searchResultClick(searchResultClickHandler);
    mse.subscribe.signIn(signInHandler);
    mse.subscribe.signOut(signOutHandler);
    mse.subscribe.updateCart(updateCartHandler);
};

const unsubscribeFromEvents = (): void => {
    mse.unsubscribe.addToCart(addToCartHandler);
    mse.unsubscribe.customUrl(customUrlHandler);
    mse.unsubscribe.dataLayerChange(dataLayerChangeHandler);
    mse.unsubscribe.dataLayerEvent(dataLayerEventHandler);
    mse.unsubscribe.initiateCheckout(initiateCheckoutHandler);
    mse.unsubscribe.pageActivitySummary(pageActivitySummaryHandler);
    mse.unsubscribe.pageView(pageViewHandler);
    mse.unsubscribe.placeOrder(placeOrderHandler);
    mse.unsubscribe.productPageView(productPageViewHandler);
    mse.unsubscribe.referrerUrl(referrerUrlHandler);
    mse.unsubscribe.removeFromCart(removeFromCartHandler);
    mse.unsubscribe.searchRequestSent(searchRequestSentHandler);
    mse.unsubscribe.searchResponseReceived(searchResponseReceivedHandler);
    mse.unsubscribe.searchResultClick(searchResultClickHandler);
    mse.unsubscribe.signIn(signInHandler);
    mse.unsubscribe.signOut(signOutHandler);
    mse.unsubscribe.updateCart(updateCartHandler);
};

export { subscribeToEvents, unsubscribeFromEvents };
