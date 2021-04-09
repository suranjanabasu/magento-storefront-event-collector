import pkg from "../../../package.json";

const mockProductCtx: Product = {
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

const mockShopperCtx: Shopper = {
    shopperId: "logged-in",
};

const mockShoppingCartCtx: ShoppingCart = {
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

const mockStorefrontCtx: Storefront = {
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

const mockTrackerCtx: Tracker = {
    magentoJsBuild: "0000",
    magentoJsVersion: pkg.version,
};

const mockExtensionCtx: Extension = {
    magentoExtensionVersion: "1.2.3",
};

const mockSearchInputCtx: SearchInput = {
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

const mockSearchResultCategoryCtx: SearchResultCategory = {
    name: "Pants",
    rank: 1,
    url: "https://magento.com/category/pants",
};

const mockSearchResultProductCtx: SearchResultProduct = {
    imageUrl: "https://magento.com/red-pants.jpg",
    name: "Red Pants",
    price: 49.99,
    rank: 1,
    sku: "abc123",
    url: "https://magento.com/red-pants",
};

const mockSearchResultsCtx: SearchResults = {
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

export {
    mockExtensionCtx,
    mockProductCtx,
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
