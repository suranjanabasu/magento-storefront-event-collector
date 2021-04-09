/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Recommendations } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../../schemas";

const createContext = (
    unitId: string,
    recommendations?: Recommendations,
): RecommendationUnitContext | null => {
    const recommendationsCtx =
        recommendations ?? mse.context.getRecommendations();

    const unit = recommendationsCtx.units.find(unit => unit.unitId === unitId);

    if (!unit) {
        return null;
    }

    const context = {
        schema: schemas.RECOMMENDATION_UNIT_SCHEMA_URL,
        data: {
            name: unit.unitName,
            unitId: unit.unitId,
            itemsCount: unit.totalProducts,
            backupsCount: unit.backupProducts,
            configType: "preconfigured",
            source: "api",
            recType: unit.unitType,
            // TODO: where does this come from?
            placement: "",
            // TODO: where do these come from?
            yOffsetTop: null,
            yOffsetBottom: null,
        },
    };

    return context;
};

export default createContext;
