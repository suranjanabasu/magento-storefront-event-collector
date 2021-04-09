import { createGlobalCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import {
    mockExtensionCtx,
    mockShopperCtx,
    mockShoppingCartCtx,
    mockStorefrontCtx,
    mockTrackerCtx,
} from "../utils/mocks";

test("creates context", () => {
    const ctx = createGlobalCtx();

    expect(ctx).toEqual([
        {
            data: mockExtensionCtx,
            schema: schemas.MAGENTO_EXTENSION_SCHEMA_URL,
        },
        {
            data: mockShopperCtx,
            schema: schemas.SHOPPER_SCHEMA_URL,
        },
        {
            data: mockShoppingCartCtx,
            schema: schemas.SHOPPING_CART_SCHEMA_URL,
        },
        {
            data: mockStorefrontCtx,
            schema: schemas.STOREFRONT_INSTANCE_SCHEMA_URL,
        },
        {
            data: mockTrackerCtx,
            schema: schemas.MAGENTO_JS_TRACKER_SCHEMA_URL,
        },
    ]);
});
