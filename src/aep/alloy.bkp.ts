import { createInstance } from "@adobe/alloy";

import { AEPContext } from "../types/contexts";
import { createContext } from "./contexts/aep";
import { isValidContext } from "./contexts/aep";
import { AlloyInstance } from "./types/alloy.types";
import { BeaconSchema } from "./types/schema";

/*
    We create a wrapper around `@adobe/alloy` for better type protection.
*/

/** createInstance returns a promise */
const alloy: AlloyInstance = createInstance({
    name: "alloy",
});

// const configure = async ({ debugEnabled = true } = {}): Promise<void> => {
//     const context: AEPContext = createContext();

//     // wrap this in a try/catch? i feel like we need a catch to log/output any errors we might see
//     if (isValidContext(context)) {
//         await instance("configure", {
//             edgeConfigId: context.datastreamId as string,
//             orgId: context.imsOrgId as string,
//             debugEnabled,
//         });
//     }
// };

/** sends event payload that matches the BeaconSchema that's been defined */
// const sendEvent = async (schema: BeaconSchema): Promise<void> => {
//     const xdm = { xdm: { ...schema } };
//     await instance("sendEvent", xdm);
// };

function configureAlloy(): Promise<any> {
    const aepCtx: AEPContext = createContext();

    return new Promise((resolve, reject) => {
        if (isValidContext(aepCtx)) {
            alloy("configure", {
                edgeConfigId: aepCtx.datastreamId as string,
                orgId: aepCtx.imsOrgId as string,
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

/** initialize alloy instance */
export const getAlloy = async () => {
    // try {
    //     // check to see if alloy exists on window
    //     if (window.alloy) {
    //         return window.alloy;
    //     }

    //     // if it doesn't, configure it and return an alloy instance
    //     const alloy = await configure();
    //     window.alloy = alloy;

    //     return alloy;
    // } catch (error) {
    //     throw new Error("Could not find Alloy");
    // }
    return window.alloy
        ? Promise.resolve(window.alloy)
        : configureAlloy().then(alloy => {
              window.alloy = alloy;
              return alloy;
          });
};

/** preconfigured alloy instance that allows us to send an event */
// export const getAlloy = async (): Promise<Alloy> => {
//     await initializeAlloy();

//     // return {
//     //     sendEvent,
//     // };
// };
