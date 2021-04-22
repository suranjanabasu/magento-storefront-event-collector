/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { ShoppingCart } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";

const createShoppingCartItems = (shoppingCart?: ShoppingCart) => {
    const shoppingCartCtx = shoppingCart ?? mse.context.getShoppingCart();

    if (!shoppingCartCtx.items) {
        return [];
    }

    const shoppingCartItems: Array<ShoppingCartItem> = shoppingCartCtx.items.map(
        item => ({
            // TODO: what happens if its undefined?
            basePrice: item.prices?.price.value ?? 0,
            // TODO: how do we reconcile string to int
            // suggestion: change snowplow schema to accept string
            cartItemId: parseInt(item.id) || 0,
            mainImageUrl: item.product.mainImageUrl ?? undefined,
            // TODO: what happens if its undefined?
            offerPrice: item.prices?.price.value ?? 0,
            productName: item.product.name,
            // TODO: what happens if its undefined?
            productSku: item.product.sku ?? "",
            // TODO: what happens if its undefined?
            qty: item.quantity ?? 0,
        }),
    );

    return shoppingCartItems;
};

const createContext = (
    shoppingCart?: ShoppingCart,
): ShoppingCartContext | null => {
    const shoppingCartCtx = shoppingCart ?? mse.context.getShoppingCart();

    if (!shoppingCartCtx) {
        return null;
    }

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
            subtotalExcludingTax:
                shoppingCartCtx.prices?.subtotalExcludingTax?.value,
            subtotalIncludingTax:
                shoppingCartCtx.prices?.subtotalIncludingTax?.value,
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
