/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";

import schemas from "../schemas";

const createContext = (): ProductContext => {
    const productCtx = mse.context.getProduct();

    const context = {
        schema: schemas.PRODUCT_SCHEMA_URL,
        data: {
            productId: productCtx.productId,
            name: productCtx.name,
            sku: productCtx.sku,
            topLevelSku: productCtx.topLevelSku,
            specialToDate: productCtx.specialToDate,
            specialFromDate: productCtx.specialFromDate,
            newToDate: productCtx.newToDate,
            newFromDate: productCtx.newFromDate,
            createdAt: productCtx.createdAt,
            updatedAt: productCtx.updatedAt,
            manufacturer: productCtx.manufacturer,
            countryOfManufacture: productCtx.countryOfManufacture,
            categories: productCtx.categories,
            productType: productCtx.productType,
            pricing: {
                regularPrice: productCtx.pricing?.regularPrice,
                minimalPrice: productCtx.pricing?.minimalPrice,
                maximalPrice: productCtx.pricing?.maximalPrice,
                specialPrice: productCtx.pricing?.specialPrice,
                tierPricing: productCtx.pricing?.tierPricing.map(price => ({
                    customerGroupId: price.customerGroupId,
                    qty: price.qty,
                    value: price.value,
                })),
                currencyCode: productCtx.pricing?.currencyCode,
            },
            canonicalUrl: productCtx.canonicalUrl,
            mainImageUrl: productCtx.mainImageUrl,
        },
    };

    return context;
};

export default createContext;
