import { AEP } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { AEPContext } from "../types/contexts";

const createContext = (aep?: AEP): AEPContext => {
    const mse = window.magentoStorefrontEvents;
    const aepCtx = aep ?? mse.context.getAEP();

    if (!aepCtx) {
        return {};
    }

    const context: AEPContext = {
        imsOrgId: aepCtx.imsOrgId,
        datastreamId: aepCtx.datastreamId,
    };

    return context;
};

/** checks that we have both datastreamId and imsOrgId */
export const isValidContext = ({
    datastreamId = "",
    imsOrgId = "",
}: AEPContext): boolean => {
    return datastreamId !== "" && imsOrgId !== "";
};

export default createContext;
