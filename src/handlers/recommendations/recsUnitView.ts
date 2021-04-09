/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createRecommendationUnitCtx } from "../../contexts/recommendations";
import { trackEvent } from "../../snowplow";

const handler = (event: Event): void => {
    const pageCtx = event.eventInfo.pageContext;
    const recommendationsCtx = event.eventInfo.recommendationsContext;

    const contexts: Array<SnowplowContext> = [];

    // TODO: figure out how to determine what unit was rendered
    const recommendationUnitCtx = createRecommendationUnitCtx(
        recommendationsCtx.units[0].unitId,
    );

    if (recommendationUnitCtx) {
        contexts.push(recommendationUnitCtx);
    }

    trackEvent({
        category: "recommendation-unit",
        action: "view",
        // TODO: where do we get this from?
        property: pageCtx.pageType,
        contexts,
    });
};

export default handler;
