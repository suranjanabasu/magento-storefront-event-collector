import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.cartAbandons";

const handler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();
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
                ID: shoppingCartContext.id,
            },
        },
        productListItems: createProductListItems(
            shoppingCartContext,
            storefrontInstanceContext,
        ),
    };

    alloy("sendEvent", { xdm: payload });
};

export default handler;
