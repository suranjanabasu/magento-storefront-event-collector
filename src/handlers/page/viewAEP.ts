import { getAlloy } from "../../alloy";

const aepHandler = (): void => {
    getAlloy().then(alloy =>
        alloy("sendEvent", {
            xdm: {
                eventType: "web.webpagedetails.pageViews",
                web: {
                    webPageDetails: {
                        pageViews: {
                            id: "1",
                            value: 1,
                        },
                    },
                },
            },
        }),
    );
};

export default aepHandler;
