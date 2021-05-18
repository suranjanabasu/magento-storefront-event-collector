/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import mse from "@adobe/magento-storefront-events-sdk";
import { Product } from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import schemas from "../schemas";
import { createPricing } from "../utils/product";

const createContext = (product?: Product): ProductContext => {
    const productCtx = product ?? mse.context.getProduct();

    const context: ProductContext = {
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
            pricing: createPricing(productCtx),
            canonicalUrl: productCtx.canonicalUrl,
            mainImageUrl: productCtx.mainImageUrl,
        },
    };

    return context;
};

export default createContext;
