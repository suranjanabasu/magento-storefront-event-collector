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
    const pageCtx = mse.context.getPage();
    const recommendationsCtx = mse.context.getRecommendations();

    const contexts: Array<SnowplowContext> = [];

    // TODO: figure out how to determine what unit was rendered
    const recommendationUnitCtx = createRecommendationUnitCtx(
        recommendationsCtx.units[0].unitId,
    );

    if (recommendationUnitCtx) {
        contexts.push(recommendationUnitCtx);
    }

    recommendationsCtx.units[0].products.forEach(product => {
        const itemCtx = createRecommendedItemCtx(
            recommendationsCtx.units[0].unitId,
            product.productId,
        );

        if (itemCtx) {
            contexts.push(itemCtx);
        }
    });

    trackEvent({
        category: "recommendation-unit",
        action: "impression-render",
        // TODO: where do we get this from?
        property: pageCtx.pageType,
        contexts,
    });
};

export default handler;
