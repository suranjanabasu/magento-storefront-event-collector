import { recsUnitRenderHandler } from "../../../src/handlers";

test("sends snowplow event", () => {
    recsUnitRenderHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "recommendation-unit",
        "impression-render",
        undefined,
        "<pageType>",
        undefined,
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
            {
                data: {
                    currencyCode: "USD",
                    displayRank: 2,
                    imageUrl: null,
                    name: "space sku tst three",
                    prices: {
                        maximum: {
                            final: 12.22,
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            regular: 12.22,
                            regularAdjustments: [],
                        },
                        minimum: {
                            final: 12.22,
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            regular: 12.22,
                            regularAdjustments: [],
                        },
                    },
                    serviceRank: 2,
                    sku: "space sku tst three",
                    unitId: "abc123",
                    url: "https://magento.com",
                },
                schema:
                    "iglu:com.adobe.magento.entity/recommended-item/jsonschema/1-0-3",
            },
        ],
    );
});
