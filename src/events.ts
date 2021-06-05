/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    addToCartHandler,
    instantPurchaseHandler,
    pageViewHandler,
    placeOrderHandler,
    productViewHandler,
    recsItemAddToCartClickHandler,
    recsItemClickHandler,
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
    const mse = window.magentoStorefrontEvents;

    mse.subscribe.addToCart(addToCartHandler);
    mse.subscribe.instantPurchase(instantPurchaseHandler);
    mse.subscribe.pageView(pageViewHandler);
    mse.subscribe.placeOrder(placeOrderHandler);
    mse.subscribe.productPageView(productViewHandler);
    mse.subscribe.recsItemAddToCartClick(recsItemAddToCartClickHandler);
    mse.subscribe.recsItemClick(recsItemClickHandler);
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
    const mse = window.magentoStorefrontEvents;

    mse.unsubscribe.addToCart(addToCartHandler);
    mse.unsubscribe.instantPurchase(instantPurchaseHandler);
    mse.unsubscribe.pageView(pageViewHandler);
    mse.unsubscribe.placeOrder(placeOrderHandler);
    mse.unsubscribe.productPageView(productViewHandler);
    mse.unsubscribe.recsItemAddToCartClick(recsItemAddToCartClickHandler);
    mse.unsubscribe.recsItemClick(recsItemClickHandler);
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
