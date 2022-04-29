import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { getDiscountAmount } from "../../utils/discount";

/** Sends an event to aep with an addToCart payload */
const aepHandler = async (event: Event): Promise<void> => {
    // note: the shopping cart context does not include the updated product in the cart
    const { productContext, shoppingCartContext, debugContext } =
        event.eventInfo;

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        commerce: {
            productListAdds: {
                value: 1,
            },
            cart: {
                cartID: shoppingCartContext.id,
            },
        },
        productListItems: [
            {
                SKU: productContext.sku,
                name: productContext.name,
                priceTotal:
                    productContext.pricing?.specialPrice ??
                    productContext.pricing?.regularPrice,
                currencyCode: productContext.pricing?.currencyCode ?? undefined,
                discountAmount: getDiscountAmount(productContext),
            },
        ],
    };

    sendEvent(payload);
};

export default aepHandler;
