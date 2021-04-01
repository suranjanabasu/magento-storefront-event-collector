/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../../schemas";

const createContext = (
    unitId: string,
    productId: number,
): RecommendedItemContext | null => {
    const recommendationsCtx = mse.context.getRecommendations();
    const unit = recommendationsCtx.units.find(unit => unit.unitId === unitId);

    if (!unit) {
        return null;
    }

    const product = unit.products.find(
        product => product.productId === productId,
    );

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
                    regularAdjustments: product.prices.maximum.finalAdjustments.map(
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
                    regularAdjustments: product.prices.minimum.finalAdjustments.map(
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
