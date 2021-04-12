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
import { getProduct } from "../../utils/recommendations";

const handler = (event: Event): void => {
    const {
        unitId,
        productId,
        pageContext,
        recommendationsContext,
    } = event.eventInfo;

    const contexts: Array<SnowplowContext> = [];

    const recommendationUnitCtx = createRecommendationUnitCtx(
        unitId as string,
        recommendationsContext,
    );

    if (recommendationUnitCtx) {
        contexts.push(recommendationUnitCtx);
    }

    const recommendedItemCtx = createRecommendedItemCtx(
        unitId as string,
        productId as number,
        recommendationsContext,
    );

    if (recommendedItemCtx) {
        contexts.push(recommendedItemCtx);
    }

    const product = getProduct(
        unitId as string,
        productId as number,
        recommendationsContext,
    );

    trackEvent({
        category: "recommendation-unit",
        action: "rec-add-to-cart-click",
        property: pageContext.pageType,
        value: product?.rank,
        contexts,
    });
};

export default handler;
