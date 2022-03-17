import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import { Account } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";
import { createAccount } from "../../utils/aep/account";

const XDM_EVENT_TYPE = "account.updateProfile";
const aepHandler = async (event: Event): Promise<void> => {
    const alloy = await getAlloy();
    const { debugContext, accountContext } = event.eventInfo;

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: XDM_EVENT_TYPE,
        account: createAccount(accountContext || ({} as Account)),
        userAccount: {
            updateProfile: 1,
        },
    };

    if (alloy) {
        alloy("sendEvent", { xdm: payload });
    }
};

export default aepHandler;
