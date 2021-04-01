import { createRecommendationUnitCtx } from "../../../src/contexts";

test("creates context", () => {
    const ctx = createRecommendationUnitCtx("abc123");

    expect(ctx).toEqual({
        data: {
            backupsCount: 0,
            configType: "preconfigured",
            itemsCount: 2,
            name: "most-viewed",
            placement: "",
            recType: "primary",
            source: "api",
            unitId: "abc123",
            yOffsetBottom: null,
            yOffsetTop: null,
        },
        schema:
            "iglu:com.adobe.magento.entity/recommendation-unit/jsonschema/1-0-4",
    });
});
