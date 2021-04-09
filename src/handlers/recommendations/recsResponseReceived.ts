/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import {
    createRecommendationUnitCtx,
    createRecommendedItemCtx,
} from "../../contexts/recommendations";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const recommendationsCtx = mse.context.getRecommendations();

    const recommendationUnitCtxs: Array<RecommendationUnitContext> = [];
    const recommendedItemCtxs: Array<RecommendedItemContext> = [];

    recommendationsCtx.units.forEach(unit => {
        const unitCtx = createRecommendationUnitCtx(unit.unitId);

        if (unitCtx) {
            recommendationUnitCtxs.push(unitCtx);
        }

        unit.products.forEach(product => {
            {
                const itemCtx = createRecommendedItemCtx(
                    unit.unitId,
                    product.productId,
                );

                if (itemCtx) {
                    recommendedItemCtxs.push(itemCtx);
                }
            }
        });
    });

    trackEvent({
        category: "recommendation-unit",
        action: "api-response-received",
        // TODO: where do we get this from?
        property: "<pageType>",
        contexts: [...recommendationUnitCtxs, ...recommendedItemCtxs],
    });
};

export default handler;
