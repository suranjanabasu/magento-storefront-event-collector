import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "userAccount.logout";
const aepHandler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();
    const { debugContext } = event.eventInfo;

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        userAccount: {
            logout: 1,
        },
    };

    if (alloy) {
        alloy("sendEvent", { xdm: payload });
    }
};

export default aepHandler;
