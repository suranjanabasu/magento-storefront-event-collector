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
    const pageCtx = event.eventInfo.pageContext;
    const recommendationsCtx = event.eventInfo.recommendationsContext;

    const contexts: Array<SnowplowContext> = [];

    // TODO: figure out how to determine what item was clicked
    const recommendationUnitCtx = createRecommendationUnitCtx(
        recommendationsCtx.units[0].unitId,
    );

    if (recommendationUnitCtx) {
        contexts.push(recommendationUnitCtx);
    }

    // TODO: figure out how to determine what item was clicked
    const recommendedItemCtx = createRecommendedItemCtx(
        recommendationsCtx.units[0].unitId,
        recommendationsCtx.units[0].products[0].productId,
    );

    if (recommendedItemCtx) {
        contexts.push(recommendedItemCtx);
    }

    trackEvent({
        category: "recommendation-unit",
        action: "rec-add-to-cart-click",
        // TODO: where do we get this from?
        property: pageCtx.pageType,
        value: recommendationsCtx.units[0].products[0].rank,
        contexts,
    });
};

export default handler;
