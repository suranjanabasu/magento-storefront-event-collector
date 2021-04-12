/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import {
    createRecommendationUnitCtx,
    createRecommendedItemCtx,
} from "../../contexts/recommendations";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const { pageContext, recommendationsContext } = event.eventInfo;

    const recommendationUnitCtxs: Array<RecommendationUnitContext> = [];
    const recommendedItemCtxs: Array<RecommendedItemContext> = [];

    recommendationsContext.units.forEach(unit => {
        const unitCtx = createRecommendationUnitCtx(
            unit.unitId as string,
            recommendationsContext,
        );

        if (unitCtx) {
            recommendationUnitCtxs.push(unitCtx);
        }

        unit.products.forEach(product => {
            {
                const itemCtx = createRecommendedItemCtx(
                    unit.unitId,
                    product.productId,
                    recommendationsContext,
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
        property: pageContext.pageType,
        contexts: [...recommendationUnitCtxs, ...recommendedItemCtxs],
    });
};

export default handler;
