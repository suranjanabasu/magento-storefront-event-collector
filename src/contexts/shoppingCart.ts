/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import {
    Order,
    ShoppingCart,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";

const createShoppingCartItems = (shoppingCart?: ShoppingCart) => {
    const shoppingCartCtx = shoppingCart ?? mse.context.getShoppingCart();

    if (!shoppingCartCtx.items) {
        return [];
    }

    const shoppingCartItems = shoppingCartCtx.items.map(item => ({
        // TODO: same as offerPrice
        // cart.items[n].prices.price.value
        basePrice: item.product.pricing?.regularPrice,
        // TODO: how do we reconcile string to int
        // suggestion: change snowplow schema to accept string
        cartItemId: parseInt(item.id) || 0,
        mainImageUrl: item.product.mainImageUrl ?? undefined,
        // TODO: what price should we use?
        // its not an array...
        // cart.items[n].prices.price.value
        offerPrice: item.prices?.[0].value ?? 0,
        productName: item.product.name,
        // TODO: what happens if its undefined?
        productSku: item.product.sku ?? "",
        // TODO: what happens if its undefined?
        qty: item.quantity ?? 0,
    }));

    return shoppingCartItems;
};

const createContext = (
    shoppingCart?: ShoppingCart,
    order?: Order,
): ShoppingCartContext => {
    const shoppingCartCtx = shoppingCart ?? mse.context.getShoppingCart();
    const orderCtx = order ?? mse.context.getOrder();

    const context = {
        schema: schemas.SHOPPING_CART_SCHEMA_URL,
        data: {
            // TODO: how do we reconcile string to int
            // suggestion: change snowplow schema to accept string
            cartId:
                shoppingCartCtx.id === null
                    ? null
                    : parseInt(shoppingCartCtx.id),
            itemsCount: shoppingCartCtx.totalQuantity,
            items: createShoppingCartItems(shoppingCartCtx),
            // TODO: where does this come from?
            // specific to luma
            // why do we care?
            possibleOnepageCheckout: false,
            // TODO: confirm this is correct
            // move these to cart context
            // not sure about subtotalamount
            subtotalAmount: orderCtx.subtotalExcludingTax,
            subtotalExcludingTax: orderCtx.subtotalExcludingTax,
            subtotalIncludingTax: orderCtx.subtotalIncludingTax,
            // TODO: where does these come from?
            // calculated from what the client knows
            // should be simplified
            giftMessageSelected: false,
            giftWrappingSelected: false,
        },
    };

    return context;
};

export default createContext;
