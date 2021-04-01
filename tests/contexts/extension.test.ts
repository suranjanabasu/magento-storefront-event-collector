import { createMagentoExtensionCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createMagentoExtensionCtx();

    expect(ctx).toEqual({
        data: {
            magentoExtensionVersion: "1.2.3",
        },
        schema:
            "iglu:com.adobe.magento.entity/magento-extension/jsonschema/1-0-0",
    });
});
