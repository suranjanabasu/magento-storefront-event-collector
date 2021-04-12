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
import { getUnit } from "../../utils/recommendations";

const handler = (event: Event): void => {
    const { unitId, pageContext, recommendationsContext } = event.eventInfo;

    const contexts: Array<SnowplowContext> = [];

    const recommendationUnitCtx = createRecommendationUnitCtx(
        unitId as string,
        recommendationsContext,
    );

    if (recommendationUnitCtx) {
        contexts.push(recommendationUnitCtx);
    }

    const unit = getUnit(unitId as string, recommendationsContext);

    unit?.products.forEach(product => {
        const itemCtx = createRecommendedItemCtx(
            unitId as string,
            product.productId,
            recommendationsContext,
        );

        if (itemCtx) {
            contexts.push(itemCtx);
        }
    });

    trackEvent({
        category: "recommendation-unit",
        action: "impression-render",
        property: pageContext.pageType,
        contexts,
    });
};

export default handler;
