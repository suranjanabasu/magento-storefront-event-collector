import { recsItemAddToCartClickHandler } from "../../../src/handlers";

test("sends snowplow event", () => {
    recsItemAddToCartClickHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "rec-add-to-cart-click",
        undefined,
        "pdp",
        1,
        [
            {
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
            },
            {
                data: {
                    currencyCode: "USD",
                    displayRank: 1,
                    imageUrl: null,
                    name: "space sku tst two",
                    prices: {
                        maximum: {
                            final: 33.12,
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            regular: 33.12,
                            regularAdjustments: [],
                        },
                        minimum: {
                            final: 33.12,
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
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
            },
        ],
    );
});
