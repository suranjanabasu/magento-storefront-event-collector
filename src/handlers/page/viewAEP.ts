/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
import { getAlloy } from "../../alloy";

const aepHandler = (): void => {
    const alloy = getAlloy();
    if (alloy) {
        alloy("sendEvent", {
            web: {
                webPageDetails: {
                    pageViews: {
                        id: "1",
                        value: 1,
                    },
                },
            },
        });
    }
};

export default aepHandler;
