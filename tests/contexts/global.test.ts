import { createGlobalCtx } from "../../src/contexts";
import schemas from "../../src/schemas";
import {
    mockExtensionCtx,
    mockShopperCtx,
    mockStorefrontCtx,
    mockTrackerCtx,
} from "../utils/mocks";

test("creates context", () => {
    const ctx = createGlobalCtx();

    expect(ctx).toEqual([
        {
            data: mockTrackerCtx,
            schema: schemas.MAGENTO_JS_TRACKER_SCHEMA_URL,
        },
        {
            data: mockExtensionCtx,
            schema: schemas.MAGENTO_EXTENSION_SCHEMA_URL,
        },
        {
            data: mockStorefrontCtx,
            schema: schemas.STOREFRONT_INSTANCE_SCHEMA_URL,
        },
        expect.any(Function),
    ]);
});
