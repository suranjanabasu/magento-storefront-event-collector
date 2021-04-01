import { createStorefrontInstanceCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createStorefrontInstanceCtx();

    expect(ctx).toEqual({
        data: {
            baseCurrencyCode: "USD",
            environment: "production",
            environmentId: "aaaaaa",
            instanceId: "bbbbbb",
            storeCode: "magento",
            storeId: 111111,
            storeName: "magento",
            storeUrl: "https://magento.com",
            storeViewCode: "default",
            storeViewCurrencyCode: "USD",
            storeViewId: 222222,
            storeViewName: "default",
            websiteCode: "website",
            websiteId: 333333,
            websiteName: "website",
        },
        schema:
            "iglu:com.adobe.magento.entity/storefront-instance/jsonschema/3-0-0",
    });
});
