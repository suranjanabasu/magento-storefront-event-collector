import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.checkouts";

const handler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();
    const { shoppingCartContext } = event.eventInfo;

    const payload: BeaconSchema = {
        eventType: XDM_EVENT_TYPE,
        commerce: {
            checkouts: {
                id: "1",
                value: 1,
            },
            cart: {
                cartId: shoppingCartContext.id ?? "1",
            },
        },
        productListItems: createProductListItems(shoppingCartContext),
    };

    alloy("sendEvent", { xdm: payload });
};

export default handler;
