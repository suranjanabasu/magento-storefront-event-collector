import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "userAccount.logout";
const aepHandler = async (event: Event): Promise<void> => {
    const { debugContext } = event.eventInfo;

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        userAccount: {
            logout: 1,
        },
    };

    sendEvent(payload);
};

export default aepHandler;
