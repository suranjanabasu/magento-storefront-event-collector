type Extension = {
    magentoExtensionVersion: string;
};

type Product = {
    canonicalUrl?: string | null;
    categories?: Array<string | null>;
    countryOfManufacture?: string | null;
    createdAt?: string | null;
    mainImageUrl?: string | null;
    manufacturer?: string | null;
    name: string;
    newFromDate?: string | null;
    newToDate?: string | null;
    productId: number;
    sku: string;
    pricing?: {
        currencyCode: string | null;
        maximalPrice: number;
        minimalPrice: number;
        regularPrice: number;
        specialPrice?: number;
        tierPricing?: Array<{
            customerGroupId: number | null;
            qty: number;
            value: number;
        }>;
    };
    productType?: string | null;
    specialFromDate?: string | null;
    specialToDate?: string | null;
    topLevelSku?: string | null;
    updatedAt?: string | null;
};

type SearchInput = {
    page: number;
    perPage: number;
    query: string;
    refinements?: Array<{
        name?: string;
        value?: string;
    }>;
    sortType: string;
    sortOrder: string;
    source?: string;
};

type SearchResultCategory = {
    name: string;
    rank: number;
    url: string;
};

type SearchResultProduct = {
    imageUrl: string;
    name: string;
    price: number;
    rank: number;
    sku: string;
    url: string;
};

type SearchResults = {
    products: Array<SearchResultProduct>;
    suggestions: Array<SearchResultSuggestion>;
    categories: Array<SearchResultCategory>;
    page: number;
    perPage: number;
    productCount: number;
    categoryCount: number;
    suggestionCount: number;
};

type SearchResultSuggestion = {
    suggestion: string;
    rank: number;
};

type Shopper = {
    ecid?: string;
    name?: string;
    shopperId: string;
};

type ShoppingCart = {
    cartId?: number | null;
    giftMessageSelected?: boolean;
    giftWrappingSelected?: boolean;
    items?: Array<{
        basePrice?: number;
        cartItemId: number;
        mainImageUrl?: string;
        offerPrice: number;
        productName: string;
        productSku: string;
        qty: number;
    }>;
    itemsCount: number;
    possibleOnepageCheckout?: boolean;
    subtotalAmount?: number;
    subtotalExcludingTax?: number;
    subtotalIncludingTax?: number;
};

type Storefront = {
    baseCurrencyCode: string;
    catalogExtensionVersion?: string | null;
    environment: string;
    environmentId: string;
    instanceId?: string;
    storeCode?: string;
    storeId: number;
    storeName: string;
    storeUrl: string;
    storeViewCode?: string;
    storeViewCurrencyCode: string;
    storeViewId: number;
    storeViewName: string;
    websiteCode?: string;
    websiteId: number;
    websiteName: string;
};

type Tracker = {
    magentoJsVersion: string;
    magentoJsBuild: string;
};

type ExtensionContext = {
    schema: string;
    data: Extension;
};

type ProductContext = {
    schema: string;
    data: Product;
};

type SearchInputContext = {
    schema: string;
    data: SearchInput;
};

type SearchResultCategoryContext = {
    schema: string;
    data: SearchResultCategory;
};

type SearchResultProductContext = {
    schema: string;
    data: SearchResultProduct;
};

type SearchResultsContext = {
    schema: string;
    data: SearchResults;
};

type SearchResultSuggestionContext = {
    schema: string;
    data: SearchResultSuggestion;
};

type ShopperContext = {
    schema: string;
    data: Shopper;
};

type ShoppingCartContext = {
    schema: string;
    data: ShoppingCart;
};

type StorefrontContext = {
    schema: string;
    data: Storefront;
};

type TrackerContext = {
    schema: string;
    data: Tracker;
};

type SnowplowContext =
    | ExtensionContext
    | ProductContext
    | SearchInputContext
    | SearchResultCategoryContext
    | SearchResultProductContext
    | SearchResultsContext
    | SearchResultSuggestionContext
    | ShopperContext
    | ShoppingCartContext
    | StorefrontContext
    | TrackerContext;
