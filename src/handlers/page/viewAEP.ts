/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

const aepHandler = (): void => {
    const alloy = window.alloy;
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
