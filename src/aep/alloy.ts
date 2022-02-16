import { createInstance } from "@adobe/alloy";

import { AEPContext } from "../types/contexts";
import { createContext, isValidContext } from "./contexts";
import { AlloyInstance } from "./types/alloy.types";
import { BeaconSchema } from "./types/schema";

/*
    We create a wrapper around `@adobe/alloy` for better type protection.
*/

const alloyInstance: AlloyInstance = createInstance({ name: "alloy" });

function configureAlloy(): Promise<any> {
    const aepCtx: AEPContext = createContext();

    return new Promise((resolve, reject) => {
        if (isValidContext(aepCtx)) {
            alloyInstance("configure", {
                edgeConfigId: aepCtx.datastreamId as string,
                orgId: aepCtx.imsOrgId as string,
                // TODO ahammond: possibly remove debug when feature complete
                debugEnabled: true,
            }).then(() => {
                resolve(alloyInstance);
            });
        } else {
            reject();
        }
    });
}

/** return alloy instance if it exists on the window, configures instance if it doesn't exist */
const getAlloy = async (): Promise<AlloyInstance> => {
    if (window.alloy) {
        return window.alloy;
    }

    window.alloy = await configureAlloy();
    return window.alloy;
};

/** sends event payload that matches the BeaconSchema that's been defined */
const sendEvent = async (schema: BeaconSchema): Promise<void> => {
    const instance = await getAlloy();
    const xdm = { xdm: { ...schema } };

    await instance("sendEvent", xdm);
};

/** preconfigured alloy instance that allows us to send an event */
export const alloy = { sendEvent };
