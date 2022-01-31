/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
import { createInstance } from "@adobe/alloy";

import { createAEPCtx } from "./contexts";
import { AEPContext } from "./types/contexts";
const alloy = createInstance({ name: "alloy" });

let tryConnectToAlloy = true;

function isValid(aep: AEPContext) {
    return (
        aep.datastreamId &&
        aep.datastreamId !== "" &&
        aep.imsOrgId &&
        aep.imsOrgId !== ""
    );
}

function configureAlloy(): void {
    const aepCtx: AEPContext = createAEPCtx();

    if (isValid(aepCtx)) {
        alloy("configure", {
            edgeConfigId: aepCtx.datastreamId,
            orgId: aepCtx.imsOrgId,
            // TODO ahammond: possibly remove debug when feature complete
            debugEnabled: true,
        })
            .then(() => {
                window.alloy = alloy;
            })
            .error(() => {
                // TODO ahammond: more error handling
                tryConnectToAlloy = false;
            });
    }
}

const getAlloy = (): any => {
    if (!window.alloy && tryConnectToAlloy) {
        configureAlloy();
    }
    return window.alloy;
};

export { getAlloy };
