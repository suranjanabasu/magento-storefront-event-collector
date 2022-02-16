import { alloy } from "../../alloy";

export const pageViewHandler = async (): Promise<void> => {
    alloy.sendEvent({
        web: {
            webPageDetails: {
                pageViews: {
                    id: "1",
                    value: 1,
                },
            },
        },
    });
};
