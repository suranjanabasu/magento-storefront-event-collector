import { createInstance } from "@adobe/alloy";

import { createAEPCtx } from "./contexts";
import { AEPContext } from "./types/contexts";
const alloy = createInstance({ name: "alloy" });

function isValid(aep: AEPContext) {
    return (
        aep.datastreamId &&
        aep.datastreamId !== "" &&
        aep.imsOrgId &&
        aep.imsOrgId !== ""
    );
}

function configureAlloy(): Promise<any> {
    const aepCtx: AEPContext = createAEPCtx();

    return new Promise((resolve, reject) => {
        if (isValid(aepCtx)) {
            alloy("configure", {
                edgeConfigId: aepCtx.datastreamId,
                orgId: aepCtx.imsOrgId,
                // TODO ahammond: possibly remove debug when feature complete
                debugEnabled: true,
            }).then(() => {
                resolve(alloy);
            });
        } else {
            reject();
        }
    });
}

const getAlloy = (): Promise<any> => {
    return window.alloy
        ? Promise.resolve(window.alloy)
        : configureAlloy().then(alloy => {
              window.alloy = alloy;
              return alloy;
          });
};

export { getAlloy };
