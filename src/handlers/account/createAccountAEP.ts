import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { Account } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createAccount } from "../../utils/aep/account";

const XDM_EVENT_TYPE = "account.createProfile";
const aepHandler = async (event: Event): Promise<void> => {
    const { debugContext, accountContext } = event.eventInfo;

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        _atag: {
            account: createAccount(accountContext || ({} as Account)),
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
