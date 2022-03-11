import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { getAlloy } from "../../alloy";
import { BeaconSchema } from "../../types/aep";

const aepHandler = (event: Event): void => {
    const { pageContext, debugContext } = event.eventInfo;

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
                name: (pageContext as any).pageName || undefined,
            },
        },
    };

    getAlloy().then(alloy =>
        alloy("sendEvent", {
            xdm: payload,
        }),
    );
};

export default aepHandler;
