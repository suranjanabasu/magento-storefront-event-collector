import {
    addToCartHandler,
    pageViewHandler,
    shoppingCartViewHandler,
} from "./handlers";

/** handles subscriptions to AEP events */
export const subscribeToAEPEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    mse.subscribe.pageView(pageViewHandler);
    mse.subscribe.addToCart(addToCartHandler);
    mse.subscribe.shoppingCartView(shoppingCartViewHandler);
};

/** handles unsubscriptions to AEP events */
export const unsubscribeToAEPEvents = (): void => {
    const mse = window.magentoStorefrontEvents;

    mse.subscribe.pageView(pageViewHandler);
    mse.subscribe.addToCart(addToCartHandler);
    mse.subscribe.shoppingCartView(shoppingCartViewHandler);
};
