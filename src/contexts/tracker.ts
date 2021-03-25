/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Context } from "@adobe/magento-storefront-events-sdk/dist/types/types/contexts";
import { version } from "../../package.json";
import schemas from "../schemas";

const createContext = (): Context => {
    const context = {
        schema: schemas.MAGENTO_JS_TRACKER_SCHEMA_URL,
        data: {
            magentoJsVersion: version,
            magentoJsBuild: "0000",
        },
    };

    return context;
};

export default createContext;
