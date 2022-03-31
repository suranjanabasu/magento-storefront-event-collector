import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createOrder } from "../../utils/aep/order";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.instantPurchase";

/** Sends an event to aep with an instant purchase payload */
// NOTE instant purchase only differs by eventType from place order/order complete
const aepHandler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();
    const {
        storefrontInstanceContext,
        orderContext,
        shoppingCartContext,
        debugContext,
    } = event.eventInfo;

    // get commerce fields
    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        commerce: {
            order: createOrder(orderContext, storefrontInstanceContext),
            promotionID: orderContext.appliedCouponCode,
        },
        productListItems: createProductListItems(
            shoppingCartContext,
            storefrontInstanceContext,
        ),
    };

    if (alloy) {
        alloy("sendEvent", { xdm: payload });
    }
};

export default aepHandler;
