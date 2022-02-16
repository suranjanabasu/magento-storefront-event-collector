import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { ShoppingCart } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas/shoppingCart";

import { alloy } from "../../alloy";
import { BeaconSchema, ProductListItem } from "../../types/schema";

/**
 * map shopping cart items to aep format
 *
 * @remarks `discountAmount` and `selectedOtions` are not supported in the sdk type yet
 */
const getProductsInCart = (
    cart: ShoppingCart,
): ProductListItem[] | undefined => {
    if (!cart.items?.length) {
        return undefined;
    }

    return cart.items.map(item => ({
        SKU: item.product.sku,
        name: item.product.name,
        quantity: item.quantity,
        priceTotal: item.prices.price.value,
        currencyCode: item.prices.price.currency,
        discountAmount: "" as any,
    }));
};

/** handles shopping cart view event for AEP */
export const shoppingCartViewHandler = async (event: Event): Promise<void> => {
    const { shoppingCartContext } = event.eventInfo;

    const payload: BeaconSchema = {
        commerce: {
            productListViews: {
                id: "different from productListAdds",
                value: 1,
            },
        },
    };

    // get metadata of the product from the cart
    if (shoppingCartContext.items?.length) {
        const productList = getProductsInCart(shoppingCartContext);

        if (!productList) {
            // TODO: custom logger
            // eslint-disable-next-line no-console
            console.error("No matching product found in ShoppingCart");
            return;
        }

        payload.productListItems = productList;
    }

    alloy.sendEvent(payload);
};
