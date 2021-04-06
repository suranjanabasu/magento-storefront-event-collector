/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import { createRecommendationUnitCtx } from "../../contexts/recommendations";
import { trackEvent } from "../../snowplow";

const handler = (): void => {
    const recommendationsCtx = mse.context.getRecommendations();

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
        property: "<pageType>",
        contexts,
    });
};

export default handler;
