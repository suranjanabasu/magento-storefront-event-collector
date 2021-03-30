/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import {
    addToCartHandler,
    searchCategoryClickHandler,
    searchProductClickHandler,
    searchRequestSentHandler,
    searchResponseReceivedHandler,
    searchResultsViewHandler,
    searchSuggestionClickHandler,
} from "./handlers";

const subscribeToEvents = (): void => {
    mse.subscribe.addToCart(addToCartHandler);
    mse.subscribe.searchCategoryClick(searchCategoryClickHandler);
    mse.subscribe.searchProductClick(searchProductClickHandler);
    mse.subscribe.searchRequestSent(searchRequestSentHandler);
    mse.subscribe.searchResponseReceived(searchResponseReceivedHandler);
    mse.subscribe.searchResultsView(searchResultsViewHandler);
    mse.subscribe.searchSuggestionClick(searchSuggestionClickHandler);
};

const unsubscribeFromEvents = (): void => {
    mse.unsubscribe.addToCart(addToCartHandler);
    mse.unsubscribe.searchCategoryClick(searchCategoryClickHandler);
    mse.unsubscribe.searchProductClick(searchProductClickHandler);
    mse.unsubscribe.searchRequestSent(searchRequestSentHandler);
    mse.unsubscribe.searchResponseReceived(searchResponseReceivedHandler);
    mse.unsubscribe.searchResultsView(searchResultsViewHandler);
    mse.unsubscribe.searchSuggestionClick(searchSuggestionClickHandler);
};

export { subscribeToEvents, unsubscribeFromEvents };
