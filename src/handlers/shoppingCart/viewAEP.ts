import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { ShoppingCart } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas/shoppingCart";

import { getAlloy } from "../../alloy";
import { BeaconSchema, ProductListItem } from "../../types/aep";

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
    }));
};

/**  */
const aepHandler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();

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

    if (alloy) {
        alloy("sendEvent", payload);
    }
};

export default aepHandler;
