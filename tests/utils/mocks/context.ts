import pkg from "../../../package.json";

const mockProductCtx = {
    productId: 111111,
    name: "T-Shirt",
    sku: "aaaaaa",
    topLevelSku: "bbbbbb",
    specialToDate: "01/10/2021",
    specialFromDate: "01/01/2021",
    newToDate: "01/10/2021",
    newFromDate: "01/01/2021",
    createdAt: "01/01/2021",
    updatedAt: "01/01/2021",
    manufacturer: "Magento",
    countryOfManufacture: "USA",
    categories: ["Tops", "Shirts"],
    productType: "normal",
    pricing: {
        regularPrice: 19.99,
        minimalPrice: 10.99,
        maximalPrice: 24.99,
        specialPrice: 14.99,
        tierPricing: [],
        currencyCode: "USD",
    },
    canonicalUrl: "https://magento.com/tshirt",
    mainImageUrl: "https://magento.com/tshirt.jpg",
};

const mockShopperCtx = {
    shopperId: "logged-in",
};

const mockShoppingCartCtx = {
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
};

const mockStorefrontCtx = {
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
};

const mockTrackerCtx = {
    magentoJsBuild: "0000",
    magentoJsVersion: pkg.version,
};

const mockExtensionCtx = {
    magentoExtensionVersion: "1.2.3",
};

const mockSearchInputCtx = {
    page: 1,
    perPage: 20,
    query: "red patns",
    refinements: [
        {
            name: undefined,
            value: undefined,
        },
    ],
    sortOrder: "descending",
    sortType: "relevance",
    source: "search-bar",
};

const mockSearchResultCategoryCtx = {
    name: "Pants",
    rank: 1,
    url: "https://magento.com/category/pants",
};

const mockSearchResultProductCtx = {
    imageUrl: "https://magento.com/red-pants.jpg",
    name: "Red Pants",
    price: 49.99,
    rank: 1,
    sku: "abc123",
    url: "https://magento.com/red-pants",
};

const mockSearchResultsCtx = {
    categories: [
        {
            name: "Pants",
            rank: 1,
            url: "https://magento.com/category/pants",
        },
        {
            name: "Bottoms",
            rank: 2,
            url: "https://magento.com/category/bottoms",
        },
    ],
    categoryCount: 2,
    page: 1,
    perPage: 20,
    productCount: 1,
    products: [
        {
            imageUrl: "https://magento.com/red-pants.jpg",
            name: "Red Pants",
            price: 49.99,
            rank: 1,
            sku: "abc123",
            url: "https://magento.com/red-pants",
        },
    ],
    suggestionCount: 1,
    suggestions: [
        {
            rank: 1,
            suggestion: "red pants",
        },
    ],
};

const mockSearchResultSuggestionCtx = {
    rank: 1,
    suggestion: "red pants",
};

const mockRecommendationUnitCtx = {
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
};

const mockRecommendedItemsCtx = [
    {
        currencyCode: "USD",
        displayRank: 1,
        imageUrl: null,
        name: "first item",
        prices: {
            maximum: {
                final: 19.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 29.99,
                regularAdjustments: [],
            },
            minimum: {
                final: 19.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 29.99,
                regularAdjustments: [],
            },
        },
        serviceRank: 1,
        sku: "abc123",
        unitId: "abc123",
        url: "https://magento.com",
    },
    {
        currencyCode: "USD",
        displayRank: 2,
        imageUrl: null,
        name: "second item",
        prices: {
            maximum: {
                final: 9.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 19.99,
                regularAdjustments: [],
            },
            minimum: {
                final: 9.99,
                finalAdjustments: [
                    {
                        code: "coupon",
                        amount: 10,
                    },
                ],
                regular: 19.99,
                regularAdjustments: [],
            },
        },
        serviceRank: 2,
        sku: "def456",
        unitId: "abc123",
        url: "https://magento.com",
    },
];

export {
    mockExtensionCtx,
    mockProductCtx,
    mockRecommendationUnitCtx,
    mockRecommendedItemsCtx,
    mockSearchInputCtx,
    mockSearchResultCategoryCtx,
    mockSearchResultProductCtx,
    mockSearchResultsCtx,
    mockSearchResultSuggestionCtx,
    mockShopperCtx,
    mockShoppingCartCtx,
    mockStorefrontCtx,
    mockTrackerCtx,
};
