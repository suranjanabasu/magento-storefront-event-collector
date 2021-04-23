/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Shopper } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";

const createContext = (shopper?: Shopper): ShopperContext => {
    const shopperCtx = shopper ?? mse.context.getShopper();

    const context: ShopperContext = {
        schema: schemas.SHOPPER_SCHEMA_URL,
        data: {
            shopperId: shopperCtx.shopperId,
        },
    };

    return context;
};

export default createContext;
