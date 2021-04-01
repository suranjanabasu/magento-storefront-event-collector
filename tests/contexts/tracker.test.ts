import { createTrackerCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createTrackerCtx();

    expect(ctx).toEqual({
        data: {
            magentoJsBuild: "0000",
            magentoJsVersion: "0.0.2",
        },
        schema:
            "iglu:com.adobe.magento.entity/magento-js-tracker/jsonschema/1-0-0",
    });
});
