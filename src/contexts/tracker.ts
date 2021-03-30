/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import pkg from "../../package.json";
import schemas from "../schemas";

const createContext = (): TrackerContext => {
    const context = {
        schema: schemas.MAGENTO_JS_TRACKER_SCHEMA_URL,
        data: {
            magentoJsVersion: pkg.version,
            // TODO: what do we do now that we run off github actions?
            magentoJsBuild: "0000",
        },
    };

    return context;
};

export default createContext;
