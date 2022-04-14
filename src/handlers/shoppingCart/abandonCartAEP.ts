import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.cartAbandons";

const handler = async (event: Event): Promise<void> => {
    const { shoppingCartContext, debugContext, storefrontInstanceContext } =
        event.eventInfo;
    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        commerce: {
            cartAbandons: {
                id: "1",
                value: 1,
            },
            cart: {
                cartID: shoppingCartContext.id,
            },
        },
        productListItems: createProductListItems(
            shoppingCartContext,
            storefrontInstanceContext,
        ),
    };

    sendEvent(payload);
};

export default handler;
