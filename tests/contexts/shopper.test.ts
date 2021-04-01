import { createShopperCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createShopperCtx();

    expect(ctx).toEqual({
        data: {
            shopperId: "logged-in",
        },
        schema: "iglu:com.adobe.magento.entity/shopper/jsonschema/1-0-0",
    });
});
