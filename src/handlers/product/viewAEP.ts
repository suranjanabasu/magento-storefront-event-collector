import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema, ProductListItem } from "../../types/aep";

const XDM_EVENT_TYPE = "commerce.productViews";

const aepHandler = async (event: Event): Promise<void> => {
    const { productContext, debugContext } = event.eventInfo;

    const productListItem: ProductListItem = {
        SKU: productContext.sku,
        name: productContext.name,
        priceTotal: productContext.pricing?.regularPrice,
        currencyCode: productContext.pricing?.currencyCode ?? undefined,
    };

    if (productContext.pricing) {
        productListItem.discountAmount =
            productContext.pricing.regularPrice -
            (productContext.pricing.specialPrice ??
                productContext.pricing.regularPrice);
    }

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        commerce: {
            productViews: {
                id: productContext.productId.toString(),
                value: 1,
            },
        },
        productListItems: [productListItem],
    };

    sendEvent(payload);
};

export default aepHandler;
