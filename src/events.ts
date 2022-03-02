import {
    Event,
    EventHandler,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createEventForwardingCtx } from "./contexts";
import {
    addToCartHandler,
    addToCartHandlerAEP,
    initiateCheckoutHandler,
    initiateCheckoutHandlerAEP,
    instantPurchaseHandler,
    instantPurchaseHandlerAEP,
    pageViewHandler,
    pageViewHandlerAEP,
    placeOrderHandler,
    placeOrderHandlerAEP,
    productViewHandler,
    productViewHandlerAEP,
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
    shoppingCartViewHandlerAEP,
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

// page
const handleSnowplowPageView = handleIf(isSnowplow, pageViewHandler);
const handleAepPageView = handleIf(isAep, pageViewHandlerAEP);

// cart
const handleSnowplowInitiateCheckout = handleIf(
    isSnowplow,
    initiateCheckoutHandler,
);
const handleAEPInitiateCheckout = handleIf(isAep, initiateCheckoutHandlerAEP);

// product
const handleSnowplowAddToCart = handleIf(isSnowplow, addToCartHandler);
const handleAepAddToCart = handleIf(isAep, addToCartHandlerAEP);

// shopping cart view
const handleSnowplowShoppingCartView = handleIf(
    isSnowplow,
    shoppingCartViewHandler,
);
const handleAepShoppingCartView = handleIf(isAep, shoppingCartViewHandlerAEP);

// order
const handleSnowplowPlaceOrder = handleIf(isSnowplow, placeOrderHandler);
const handleAepPlaceOrder = handleIf(isAep, placeOrderHandlerAEP);
const handleSnowplowInstantPurchase = handleIf(
    isSnowplow,
    instantPurchaseHandler,
);
const handleAepInstantPurchase = handleIf(isAep, instantPurchaseHandlerAEP);

// product view
const handleSnowplowProductView = handleIf(isSnowplow, productViewHandler);
const handleAepProductView = handleIf(isAep, productViewHandlerAEP);

const subscribeToEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    mse.subscribe.addToCart(handleSnowplowAddToCart);
    mse.subscribe.addToCart(handleAepAddToCart);
    mse.subscribe.initiateCheckout(handleSnowplowInitiateCheckout);
    mse.subscribe.initiateCheckout(handleAEPInitiateCheckout);
    mse.subscribe.instantPurchase(handleSnowplowInstantPurchase);
    mse.subscribe.instantPurchase(handleAepInstantPurchase);
    mse.subscribe.pageView(handleSnowplowPageView);
    mse.subscribe.pageView(handleAepPageView);
    mse.subscribe.placeOrder(handleSnowplowPlaceOrder);
    mse.subscribe.placeOrder(handleAepPlaceOrder);
    mse.subscribe.productPageView(handleSnowplowProductView);
    mse.subscribe.productPageView(handleAepProductView);
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
    mse.subscribe.shoppingCartView(handleSnowplowShoppingCartView);
    mse.subscribe.shoppingCartView(handleAepShoppingCartView);
};

const unsubscribeFromEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    mse.unsubscribe.addToCart(handleSnowplowAddToCart);
    mse.unsubscribe.addToCart(handleAepAddToCart);
    mse.unsubscribe.initiateCheckout(handleSnowplowInitiateCheckout);
    mse.unsubscribe.initiateCheckout(handleAEPInitiateCheckout);
    mse.unsubscribe.instantPurchase(instantPurchaseHandler);
    mse.unsubscribe.instantPurchase(handleAepInstantPurchase);
    mse.unsubscribe.pageView(handleSnowplowPageView);
    mse.unsubscribe.pageView(handleAepPageView);
    mse.unsubscribe.placeOrder(handleSnowplowPlaceOrder);
    mse.unsubscribe.placeOrder(handleAepPlaceOrder);
    mse.unsubscribe.productPageView(handleSnowplowProductView);
    mse.unsubscribe.productPageView(handleAepProductView);
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
    mse.unsubscribe.shoppingCartView(handleSnowplowShoppingCartView);
    mse.unsubscribe.shoppingCartView(handleAepShoppingCartView);
};

export { subscribeToEvents, unsubscribeFromEvents };
