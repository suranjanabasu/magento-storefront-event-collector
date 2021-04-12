/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Recommendations } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../../schemas";
import { getProduct, getUnit } from "../../utils/recommendations";

const createContext = (
    unitId: string,
    productId: number,
    recommendations?: Recommendations,
): RecommendedItemContext | null => {
    const recommendationsCtx =
        recommendations ?? mse.context.getRecommendations();

    const unit = getUnit(unitId, recommendationsCtx);

    if (!unit) {
        return null;
    }

    const product = getProduct(unitId, productId, recommendationsCtx);

    if (!product) {
        return null;
    }

    const context = {
        schema: schemas.RECOMMENDED_ITEM_SCHEMA_URL,
        data: {
            unitId,
            serviceRank: product.rank,
            // TODO: is this right?
            displayRank: product.rank,
            name: product.name,
            sku: product.sku,
            url: product.url,
            imageUrl: product.image?.url ?? null,
            prices: {
                maximum: {
                    final: product.prices.maximum.final,
                    regular: product.prices.maximum.regular,
                    finalAdjustments: product.prices.maximum.finalAdjustments.map(
                        finalAdjustment => ({
                            code: finalAdjustment.code,
                            amount: finalAdjustment.amount,
                        }),
                    ),
                    regularAdjustments: product.prices.maximum.regularAdjustments.map(
                        finalAdjustment => ({
                            code: finalAdjustment.code,
                            amount: finalAdjustment.amount,
                        }),
                    ),
                },
                minimum: {
                    final: product.prices.minimum.final,
                    regular: product.prices.minimum.regular,
                    finalAdjustments: product.prices.minimum.finalAdjustments.map(
                        finalAdjustment => ({
                            code: finalAdjustment.code,
                            amount: finalAdjustment.amount,
                        }),
                    ),
                    regularAdjustments: product.prices.minimum.regularAdjustments.map(
                        finalAdjustment => ({
                            code: finalAdjustment.code,
                            amount: finalAdjustment.amount,
                        }),
                    ),
                },
            },
            currencyCode: product.currency,
        },
    };

    return context;
};

export default createContext;
