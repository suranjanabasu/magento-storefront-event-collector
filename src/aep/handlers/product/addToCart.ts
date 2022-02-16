import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { ShoppingCart } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { alloy } from "../../alloy";
import { BeaconSchema, ProductListItem } from "../../types/schema";

const getProductInCart = (
    productId: number,
    cart: ShoppingCart,
): ProductListItem | undefined => {
    if (!cart.items?.length) {
        return undefined;
    }

    const item = cart.items.find(item => item.product.productId === productId);

    if (!item) {
        return undefined;
    }

    return {
        SKU: item.product.sku,
        name: item.product.name,
        quantity: item.quantity,
        priceTotal: item.prices.price.value,
        currencyCode: item.prices.price.currency,
    };
};

/** Sends an event to aep with an addToCart payload */
export const addToCartHandler = async (event: Event): Promise<void> => {
    // note: the shopping cart context includes the updated product in the cart
    const { productContext, shoppingCartContext } = event.eventInfo;

    // get commerce fields
    const payload: BeaconSchema = {
        commerce: {
            productListAdds: {
                id: productContext.productId.toString(),
                value: 1,
            },
        },
    };

    // get metadata of the product from the cart
    if (shoppingCartContext.items?.length) {
        const product = getProductInCart(
            productContext.productId,
            shoppingCartContext,
        );

        if (!product) {
            // TODO: custom logger
            // eslint-disable-next-line no-console
            console.error("No matching product found in ShoppingCart");
            return;
        }

        payload.productListItems = [{ ...product }];
    }

    alloy.sendEvent(payload);
};
