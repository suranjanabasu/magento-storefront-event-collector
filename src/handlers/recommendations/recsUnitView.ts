/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";

import { createRecommendationUnitCtx } from "../../contexts/recommendations";
import { trackEvent } from "../../snowplow";

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

    trackEvent({
        category: "recommendation-unit",
        action: "view",
        property: pageContext.pageType,
        contexts,
    });
};

export default handler;
