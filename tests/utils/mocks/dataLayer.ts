import { Event } from "@adobe/magento-storefront-events-sdk/dist/types/types/events";
import {
    CustomUrl,
    MagentoExtension,
    Order,
    Page,
    Product,
    Recommendations,
    ReferrerUrl,
    SearchInput,
    SearchResults,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

const mockExtension: MagentoExtension = {
    magentoExtensionVersion: "1.2.3",
};

const mockOrder: Order = {
    appliedCouponCode: "",
    email: "example@email.com",
    grandTotal: 69.98,
    orderId: 111111,
    otherTax: 0.0,
    paymentMethodCode: "credit card",
    paymentMethodName: "visa",
    salesTax: 0.0,
    subtotalExcludingTax: 69.98,
    subtotalIncludingTax: 69.98,
};

const mockPage: Page = {
    pageType: "pdp",
    maxXOffset: 0,
    maxYOffset: 0,
    minXOffset: 0,
    minYOffset: 0,
    ping_interval: 5,
    pings: 12,
};

const mockProduct: Product = {
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

const mockRecommendations: Recommendations = {
    units: [
        {
            unitId: "abc123",
            unitName: "most-viewed",
            unitType: "primary",
            searchTime: 2,
            totalProducts: 2,
            primaryProducts: 2,
            backupProducts: 0,
            products: [
                {
                    rank: 1,
                    score: 100.5,
                    sku: "abc123",
                    name: "first item",
                    productId: 111111,
                    shortDescription: "short product description",
                    type: "simple",
                    visibility: "Catalog, Search",
                    categories: [
                        "",
                        "gear",
                        "collections",
                        "training",
                        "men",
                        "women",
                        "promotions",
                        "gift-cards",
                        "sale",
                        "what-is-new",
                        "what-is-new/qa",
                    ],
                    weight: 7.0,
                    currency: "USD",
                    url: "https://magento.com",
                    prices: {
                        maximum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 19.99,
                            regular: 29.99,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 19.99,
                            regular: 29.99,
                            regularAdjustments: [],
                        },
                    },
                    queryType: "primary",
                },
                {
                    rank: 2,
                    score: 100.5,
                    sku: "def456",
                    name: "second item",
                    productId: 222222,
                    shortDescription: "short product description",
                    type: "simple",
                    visibility: "Catalog, Search",
                    categories: [
                        "",
                        "gear",
                        "collections",
                        "training",
                        "men",
                        "women",
                        "promotions",
                        "gift-cards",
                        "sale",
                        "what-is-new",
                        "what-is-new/qa",
                    ],
                    weight: 7.0,
                    currency: "USD",
                    url: "https://magento.com",
                    prices: {
                        maximum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 9.99,
                            regular: 19.99,
                            regularAdjustments: [],
                        },
                        minimum: {
                            finalAdjustments: [
                                {
                                    code: "coupon",
                                    amount: 10,
                                },
                            ],
                            final: 9.99,
                            regular: 19.99,
                            regularAdjustments: [],
                        },
                    },
                    queryType: "primary",
                },
            ],
        },
    ],
};

const mockShoppingCart: ShoppingCart = {
    id: "111111",
    items: [
        {
            canApplyMsrp: false,
            formattedPrice: "$19.99",
            id: "aaaaaa",
            prices: [{ value: 19.99, currency: "USD" }],
            product: {
                productId: 111111,
                name: "T-Shirt",
                sku: "ts001",
            },
            configurableOptions: [],
            quantity: 1,
        },
        {
            canApplyMsrp: false,
            formattedPrice: "$49.99",
            id: "cccccc",
            prices: [{ value: 49.99, currency: "USD" }],
            product: {
                productId: 222222,
                name: "Hoodie",
                sku: "h001",
            },
            configurableOptions: [],
            quantity: 1,
        },
    ],
    prices: [
        {
            value: 19.99,
            currency: "USD",
        },
        {
            value: 49.99,
            currency: "USD",
        },
    ],
    totalQuantity: 2,
};

const mockStorefront: StorefrontInstance = {
    baseCurrencyCode: "USD",
    storeViewCurrencyCode: "USD",
    environment: "production",
    environmentId: "aaaaaa",
    instanceId: "bbbbbb",
    storeCode: "magento",
    storeId: 111111,
    storeName: "magento",
    storeUrl: "https://magento.com",
    storeViewCode: "default",
    storeViewId: 222222,
    storeViewName: "default",
    websiteCode: "website",
    websiteId: 333333,
    websiteName: "website",
};

const mockShopper: Shopper = {
    shopperId: "logged-in",
};

const mockSearchInput: SearchInput = {
    source: "search-bar",
    query: "red patns",
    page: 1,
    perPage: 20,
    filters: [
        {
            attribute: "size",
            eq: "small",
        },
        {
            attribute: "category",
            in: ["bottoms", "mens"],
        },
        {
            attribute: "price",
            range: { from: 19.99, to: 49.99 },
        },
    ],
    sortType: "relevance",
    sortOrder: "descending",
};

const mockSearchResults: SearchResults = {
    products: [
        {
            name: "Red Pants",
            sku: "abc123",
            url: "https://magento.com/red-pants",
            imageUrl: "https://magento.com/red-pants.jpg",
            price: 49.99,
            rank: 1,
        },
    ],
    suggestions: [
        {
            suggestion: "red pants",
            rank: 1,
        },
    ],
    categories: [
        {
            name: "Pants",
            url: "https://magento.com/category/pants",
            rank: 1,
        },
        {
            name: "Bottoms",
            url: "https://magento.com/category/bottoms",
            rank: 2,
        },
    ],
    page: 1,
    perPage: 20,
    productCount: 1,
    categoryCount: 2,
    suggestionCount: 1,
    facets: [],
};

const mockReferrerUrl: ReferrerUrl = {
    referrerUrl: "https://magento.com",
};

const mockCustomUrl: CustomUrl = {
    customUrl: "https://magento.com",
};

const mockEvent: Event = {
    event: "add-to-cart",
    eventInfo: {
        unitId: "abc123",
        productId: 111111,
        name: "Pants",
        sku: "abc123",
        suggestion: "red pants",
        customContext: {},
        customUrlContext: mockCustomUrl,
        magentoExtensionContext: mockExtension,
        orderContext: mockOrder,
        pageContext: mockPage,
        productContext: mockProduct,
        recommendationsContext: mockRecommendations,
        referrerUrlContext: mockReferrerUrl,
        searchInputContext: mockSearchInput,
        searchResultsContext: mockSearchResults,
        shopperContext: mockShopper,
        shoppingCartContext: mockShoppingCart,
        storefrontInstanceContext: mockStorefront,
    },
};

export {
    mockEvent,
    mockExtension,
    mockOrder,
    mockPage,
    mockProduct,
    mockRecommendations,
    mockSearchInput,
    mockSearchResults,
    mockShopper,
    mockShoppingCart,
    mockStorefront,
};
