import {
    MagentoExtension,
    Order,
    Product,
    SearchInput,
    SearchResults,
    Shopper,
    ShoppingCart,
    StorefrontInstance,
} from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

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

const mockExtension: MagentoExtension = {
    magentoExtensionVersion: "1.2.3",
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
    refinementAttribute: undefined,
    refinementSelection: undefined,
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
};

export {
    mockExtension,
    mockOrder,
    mockProduct,
    mockSearchInput,
    mockSearchResults,
    mockShopper,
    mockShoppingCart,
    mockStorefront,
};
