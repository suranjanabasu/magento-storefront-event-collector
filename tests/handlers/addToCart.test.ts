import { addToCartHandler } from "../../src/handlers";

test("sends snowplow event", () => {
    addToCartHandler();

    expect(window.snowplow).toHaveBeenCalledTimes(1);

    expect(window.snowplow).toHaveBeenCalledWith(
        "trackStructEvent",
        "product",
        "add-to-cart",
        undefined,
        "<pageType>",
        undefined,
        [
            {
                data: {
                    canonicalUrl: "https://magento.com/tshirt",
                    categories: ["Tops", "Shirts"],
                    countryOfManufacture: "USA",
                    createdAt: "01/01/2021",
                    mainImageUrl: "https://magento.com/tshirt.jpg",
                    manufacturer: "Magento",
                    name: "T-Shirt",
                    newFromDate: "01/01/2021",
                    newToDate: "01/10/2021",
                    pricing: {
                        currencyCode: "USD",
                        maximalPrice: 24.99,
                        minimalPrice: 10.99,
                        regularPrice: 19.99,
                        specialPrice: 14.99,
                        tierPricing: [],
                    },
                    productId: 111111,
                    productType: "normal",
                    sku: "aaaaaa",
                    specialFromDate: "01/01/2021",
                    specialToDate: "01/10/2021",
                    topLevelSku: "bbbbbb",
                    updatedAt: "01/01/2021",
                },
                schema:
                    "iglu:com.adobe.magento.entity/product/jsonschema/2-0-3",
            },
        ],
    );
});
