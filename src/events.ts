/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import {
    addToCartHandler,
    placeOrderHandler,
    productViewHandler,
    recsRequestSentHandler,
    recsResponseReceivedHandler,
    recsUnitRenderHandler,
    recsUnitViewHandler,
    searchCategoryClickHandler,
    searchProductClickHandler,
    searchRequestSentHandler,
    searchResponseReceivedHandler,
    searchResultsViewHandler,
    searchSuggestionClickHandler,
    shoppingCartViewHandler,
} from "./handlers";

const subscribeToEvents = (): void => {
    mse.subscribe.addToCart(addToCartHandler);
    mse.subscribe.placeOrder(placeOrderHandler);
    mse.subscribe.productPageView(productViewHandler);
    mse.subscribe.recsRequestSent(recsRequestSentHandler);
    mse.subscribe.recsResponseReceived(recsResponseReceivedHandler);
    mse.subscribe.recsUnitRender(recsUnitRenderHandler);
    mse.subscribe.recsUnitView(recsUnitViewHandler);
    mse.subscribe.searchCategoryClick(searchCategoryClickHandler);
    mse.subscribe.searchProductClick(searchProductClickHandler);
    mse.subscribe.searchRequestSent(searchRequestSentHandler);
    mse.subscribe.searchResponseReceived(searchResponseReceivedHandler);
    mse.subscribe.searchResultsView(searchResultsViewHandler);
    mse.subscribe.searchSuggestionClick(searchSuggestionClickHandler);
    mse.subscribe.shoppingCartView(shoppingCartViewHandler);
};

const unsubscribeFromEvents = (): void => {
    mse.unsubscribe.addToCart(addToCartHandler);
    mse.unsubscribe.placeOrder(placeOrderHandler);
    mse.unsubscribe.productPageView(productViewHandler);
    mse.unsubscribe.recsRequestSent(recsRequestSentHandler);
    mse.unsubscribe.recsResponseReceived(recsResponseReceivedHandler);
    mse.unsubscribe.recsUnitRender(recsUnitRenderHandler);
    mse.unsubscribe.recsUnitView(recsUnitViewHandler);
    mse.unsubscribe.searchCategoryClick(searchCategoryClickHandler);
    mse.unsubscribe.searchProductClick(searchProductClickHandler);
    mse.unsubscribe.searchRequestSent(searchRequestSentHandler);
    mse.unsubscribe.searchResponseReceived(searchResponseReceivedHandler);
    mse.unsubscribe.searchResultsView(searchResultsViewHandler);
    mse.unsubscribe.searchSuggestionClick(searchSuggestionClickHandler);
    mse.unsubscribe.shoppingCartView(shoppingCartViewHandler);
};

export { subscribeToEvents, unsubscribeFromEvents };
