/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";

import schemas from "../schemas";

const createShoppingCartItems = () => {
    const shoppingCartCtx = mse.context.getShoppingCart();

    if (!shoppingCartCtx.items) {
        return [];
    }

    const shoppingCartItems = shoppingCartCtx.items.map(item => ({
        basePrice: item.product.pricing?.regularPrice,
        // TODO: how do we reconcile string to int
        cartItemId: parseInt(item.id) || 0,
        mainImageUrl: item.product.mainImageUrl,
        // TODO: what price should we use?
        offerPrice: item.prices?.[0].value,
        productName: item.product.name,
        productSku: item.product.sku,
        qty: item.quantity,
    }));

    return shoppingCartItems;
};

const createContext = (): Context => {
    const shoppingCartCtx = mse.context.getShoppingCart();
    const orderCtx = mse.context.getOrder();

    const context = {
        schema: schemas.SHOPPING_CART_SCHEMA_URL,
        data: {
            // TODO: how do we reconcile string to int
            cartId:
                shoppingCartCtx.id === null
                    ? null
                    : parseInt(shoppingCartCtx.id),
            itemsCount: shoppingCartCtx.totalQuantity,
            items: createShoppingCartItems(),
            // TODO: where does this come from?
            possibleOnepageCheckout: false,
            // TODO: confirm this is correct
            subtotalAmount: orderCtx.subtotalExcludingTax,
            subtotalExcludingTax: orderCtx.subtotalExcludingTax,
            subtotalIncludingTax: orderCtx.subtotalIncludingTax,
            // TODO: where does these come from?
            giftMessageSelected: false,
            giftWrappingSelected: false,
        },
    };

    return context;
};

export default createContext;
