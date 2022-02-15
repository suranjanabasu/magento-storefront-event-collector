import { getAlloy } from "../../alloy";

export const pageViewHandler = async (): Promise<void> => {
    const alloy = await getAlloy();

    alloy("sendEvent", {
        xdm: {
            web: {
                webPageDetails: {
                    pageViews: {
                        id: "1",
                        value: 1,
                    },
                },
            },
        },
    });
};
