/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";
import mse from "@adobe/magento-storefront-events-sdk";
import schemas from "../schemas";

const createContext = (): Context => {
    const magentoExtensionCtx = mse.context.getMagentoExtension();

    const context = {
        schema: schemas.MAGENTO_EXTENSION_SCHEMA_URL,
        data: {
            magentoExtensionVersion:
                magentoExtensionCtx.magentoExtensionVersion,
        },
    };

    return context;
};

export default createContext;
