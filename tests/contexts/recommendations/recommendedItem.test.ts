import { createRecommendedItemCtx } from "../../../src/contexts";

test("creates context", () => {
    const ctx = createRecommendedItemCtx("abc123", 2051);

    expect(ctx).toEqual({
        data: {
            currencyCode: "USD",
            displayRank: 1,
            imageUrl: null,
            name: "space sku tst two",
            prices: {
                maximum: {
                    final: 33.12,
                    finalAdjustments: [],
                    regular: 33.12,
                    regularAdjustments: [],
                },
                minimum: {
                    final: 33.12,
                    finalAdjustments: [],
                    regular: 33.12,
                    regularAdjustments: [],
                },
            },
            serviceRank: 1,
            sku: "space sku tst two",
            unitId: "abc123",
            url: "https://magento.com",
        },
        schema:
            "iglu:com.adobe.magento.entity/recommended-item/jsonschema/1-0-3",
    });
});
