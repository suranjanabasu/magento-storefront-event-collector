/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import {
    Event,
    EventHandler,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createEventForwardingCtx } from "./contexts";
import {
    addToCartHandler,
    aepPageViewHandler,
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
import { EventForwardingContext } from "./types/contexts";

/* TODO: annhammo would like to clear the "do not send to Snowplow"
 * functionality with product management prior to enabling it in
 * production.
 */
/* const isSnowplow = (event: Event): boolean => {
    const ctx: EventForwardingContext = createEventForwardingCtx(
        event.eventInfo.eventForwardingContext,
    );
    return ctx.snowplow ?? false;
}; */
const isSnowplow = (event: Event): boolean => true;

const isAep = (event: Event): boolean => {
    const ctx: EventForwardingContext = createEventForwardingCtx(
        event.eventInfo.eventForwardingContext,
    );
    return ctx.aep ?? false;
};

const handleIf = (
    predicate: (e: Event) => boolean,
    handler: EventHandler,
): EventHandler => {
    return (event: Event) => {
        if (predicate(event)) {
            handler(event);
        }
    };
};

const handleSnowplowPageView = handleIf(isSnowplow, pageViewHandler);
const handleAepPageView = handleIf(isAep, aepPageViewHandler);

const subscribeToEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    mse.subscribe.addToCart(addToCartHandler);
    mse.subscribe.instantPurchase(instantPurchaseHandler);
    mse.subscribe.pageView(handleSnowplowPageView);
    mse.subscribe.pageView(handleAepPageView);
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
    mse.unsubscribe.pageView(handleSnowplowPageView);
    mse.unsubscribe.pageView(handleAepPageView);
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
