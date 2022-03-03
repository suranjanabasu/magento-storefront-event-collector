import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { getDiscountAmount } from "../../utils/discount";

/** Sends an event to aep with an addToCart payload */
const aepHandler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();
    // note: the shopping cart context does not include the updated product in the cart
    const { productContext, shoppingCartContext } = event.eventInfo;

    const payload: BeaconSchema = {
        commerce: {
            productListAdds: {
                id: productContext.productId.toString(),
                value: 1,
            },
            cart: {
                ID: shoppingCartContext.id,
            },
        },
        productListItems: [
            {
                SKU: productContext.sku,
                name: productContext.name,
                priceTotal: productContext.pricing?.regularPrice,
                currencyCode: productContext.pricing?.currencyCode ?? undefined,
                discountAmount: getDiscountAmount(productContext),
            },
        ],
    };

    if (alloy) {
        alloy("sendEvent", payload);
    }
};

export default aepHandler;
