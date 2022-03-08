import { createInstance } from "@adobe/alloy";

import { AlloyInstance } from "./aep/types/alloy.types";
import { isValidContext } from "./contexts/aep";
import createContext from "./contexts/aep";
import { BeaconSchema } from "./types/aep";
import { AEPContext } from "./types/contexts";

/*
    We create a wrapper around `@adobe/alloy` for better type protection.
*/

const alloyInstance: AlloyInstance = createInstance({ name: "alloy" });

/* configure alloy and assign it to the window object */
const configure = async (): Promise<AlloyInstance> => {
    const aepCtx: AEPContext = createContext();

    if (isValidContext(aepCtx)) {
        await alloyInstance("configure", {
            edgeConfigId: aepCtx.datastreamId as string,
            orgId: aepCtx.imsOrgId as string,
            // TODO ahammond: possibly remove debug when feature complete
            debugEnabled: true,
        });

        window.alloy = alloyInstance;

        return window.alloy;
    } else {
        return Promise.reject();
    }
};

/** return alloy instance if it exists on the window, configures instance if it doesn't exist */
export const getAlloy = async (): Promise<AlloyInstance> => {
    if (typeof window.alloy === "function") {
        return window.alloy;
    }

    // if alloy doesn't exist on the window, configure it
    const windowAlloy = await configure();

    return windowAlloy;
};

/** sends event payload that matches the BeaconSchema that's been defined */
const sendEvent = async (schema: BeaconSchema): Promise<void> => {
    const instance = await getAlloy();
    const xdm = { xdm: { ...schema } };

    await instance("sendEvent", xdm);
};

/** preconfigured alloy instance that allows us to send an event */
export const alloy = { sendEvent, configure };
