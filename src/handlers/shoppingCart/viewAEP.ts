import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.productListViews";

/** shoppingCartView handler for AEP event */
const aepHandler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();

    const { shoppingCartContext, debugContext } = event.eventInfo;

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        commerce: {
            cart: {
                ID: shoppingCartContext.id,
            },
            productListViews: {
                id: "1",
                value: 1,
            },
        },
        productListItems: createProductListItems(shoppingCartContext),
    };

    if (alloy) {
        alloy("sendEvent", { xdm: { ...payload } });
    }
};

export default aepHandler;
