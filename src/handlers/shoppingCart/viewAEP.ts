import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createProductListItems } from "../../utils/aep/productListItems";

const XDM_EVENT_TYPE = "commerce.productListViews";

/** shoppingCartView handler for AEP event */
const aepHandler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();

    const { shoppingCartContext } = event.eventInfo;

    // split this out later but i just need the id for now
    const payload: BeaconSchema = {
        eventType: XDM_EVENT_TYPE,
        commerce: {
            productListViews: {
                id: "1",
                value: 1,
            },
            cart: {
                ID: shoppingCartContext.id,
            },
        },
    };

    // get metadata of the product from the cart
    if (shoppingCartContext.items?.length) {
        const productList = createProductListItems(shoppingCartContext);

        if (!productList) {
            // TODO: custom logger
            // eslint-disable-next-line no-console
            console.error("No matching product found in ShoppingCart");
            return;
        }

        payload.productListItems = productList;
    }

    if (alloy) {
        alloy("sendEvent", { xdm: { ...payload } });
    }
};

export default aepHandler;
