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
        property: "<pageType>",
        value: recommendationsCtx.units[0].products[0].rank,
        contexts,
    });
};

export default handler;
