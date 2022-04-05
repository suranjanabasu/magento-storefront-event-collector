/* eslint-disable no-console */
import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { sendEvent } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

/**
 * AEP Handler for page view event
 */
const aepHandler = async (event: Event): Promise<void> => {
    const { pageContext, debugContext } = event.eventInfo;

    // if we have a name return name, else return type
    const handlePageName = () => {
        const { pageType: type, pageName: name } = pageContext;

        if (!name || !type) {
            return undefined;
        }

        return name ? name : type;
    };

    const payload: BeaconSchema = {
        _id: debugContext?.eventId,
        eventType: "web.webpagedetails.pageViews",
        web: {
            webPageDetails: {
                pageViews: {
                    id: "1",
                    value: 1,
                },
                siteSection: pageContext.pageType,
                /** temporary until sdk update gets merged */
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                name: handlePageName(),
            },
        },
    };

    sendEvent(payload);
};

export default aepHandler;
