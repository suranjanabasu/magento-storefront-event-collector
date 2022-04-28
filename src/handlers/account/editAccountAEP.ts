import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const XDM_EVENT_TYPE = "account.updateProfile";
const aepHandler = async (event: Event): Promise<void> => {
    const { debugContext, accountContext } = event.eventInfo;

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        person: {
            accountID: accountContext?.accountId,
            accountType: accountContext?.accountType,
            personlEmailID: accountContext?.emailAddress,
        },
        personalEmail: {
            address: accountContext?.emailAddress,
        },
        userAccount: {
            updateProfile: 1,
        },
    };

    sendEvent(payload);
};

export default aepHandler;
