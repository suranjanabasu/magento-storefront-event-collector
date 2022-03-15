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
            // TODO ahammond: remove debug when feature complete
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
    try {
        const instance = await getAlloy();
        const xdm = { xdm: { ...schema } };

        await instance("sendEvent", xdm);
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error("sendEvent error:", error);
    }
};

// isValidContext and hasConfig can be combined later

/**
 * checks to make sure aep in the eventForwarding context is set to true and
 * that there is at least a datastreamId
 */
const hasConfig = (): boolean => {
    const { context } = window.magentoStorefrontEvents;
    const eventForwarding = context.getEventForwarding();
    const config = context.getAEP();

    return (
        (eventForwarding?.aep || false) &&
        config.datastreamId !== "" &&
        config.imsOrgId !== ""
    );
};

/** preconfigured alloy instance that allows us to send an event */
export const alloy = { sendEvent, configure, hasConfig };
