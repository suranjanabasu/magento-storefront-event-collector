import pkg from "../../package.json";
import { createGlobalCtx } from "../../src/contexts";

test("creates context", () => {
    const ctx = createGlobalCtx();

    expect(ctx).toEqual([
        {
            data: { magentoExtensionVersion: "1.2.3" },
            schema:
                "iglu:com.adobe.magento.entity/magento-extension/jsonschema/1-0-0",
        },
        {
            data: { shopperId: "logged-in" },
            schema: "iglu:com.adobe.magento.entity/shopper/jsonschema/1-0-0",
        },
        {
            data: {
                cartId: 111111,
                giftMessageSelected: false,
                giftWrappingSelected: false,
                items: [
                    {
                        basePrice: undefined,
                        cartItemId: 0,
                        mainImageUrl: undefined,
                        offerPrice: 19.99,
                        productName: "T-Shirt",
                        productSku: "ts001",
                        qty: 1,
                    },
                    {
                        basePrice: undefined,
                        cartItemId: 0,
                        mainImageUrl: undefined,
                        offerPrice: 49.99,
                        productName: "Hoodie",
                        productSku: "h001",
                        qty: 1,
                    },
                ],
                itemsCount: 2,
                possibleOnepageCheckout: false,
                subtotalAmount: 69.98,
                subtotalExcludingTax: 69.98,
                subtotalIncludingTax: 69.98,
            },
            schema:
                "iglu:com.adobe.magento.entity/shopping-cart/jsonschema/1-0-1",
        },
        {
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
        },
        {
            data: { magentoJsBuild: "0000", magentoJsVersion: pkg.version },
            schema:
                "iglu:com.adobe.magento.entity/magento-js-tracker/jsonschema/1-0-0",
        },
    ]);
});
