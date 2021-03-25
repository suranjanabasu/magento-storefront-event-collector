/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";
import mse from "@adobe/magento-storefront-events-sdk";
import schemas from "../schemas";

const createContext = (): Context => {
    const shopperCtx = mse.context.getShopper();

    const context = {
        schema: schemas.SHOPPER_SCHEMA_URL,
        data: {
            shopperId: shopperCtx.shopperId,
        },
    };

    return context;
};

export default createContext;
