export type Extension = {
    magentoExtensionVersion: string;
};

export type Product = {
    canonicalUrl?: string | null;
    categories?: Array<string> | null;
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

export type SearchInput = {
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

export type SearchResultCategory = {
    name: string;
    rank: number;
    url: string;
};

export type SearchResultProduct = {
    imageUrl: string;
    name: string;
    price: number;
    rank: number;
    sku: string;
    url: string;
};

export type SearchResults = {
    products: Array<SearchResultProduct>;
    suggestions: Array<SearchResultSuggestion>;
    categories: Array<SearchResultCategory>;
    page: number;
    perPage: number;
    productCount: number;
    categoryCount: number;
    suggestionCount: number;
};

export type SearchResultSuggestion = {
    suggestion: string;
    rank: number;
};

export type Shopper = {
    ecid?: string;
    name?: string;
    shopperId: string;
};

export type ShoppingCart = {
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

export type Storefront = {
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

export type Tracker = {
    magentoJsVersion: string;
    magentoJsBuild: string;
};

export type ExtensionContext = {
    schema: string;
    data: Extension;
};

export type ProductContext = {
    schema: string;
    data: Product;
};

export type SearchInputContext = {
    schema: string;
    data: SearchInput;
};

export type SearchResultCategoryContext = {
    schema: string;
    data: SearchResultCategory;
};

export type SearchResultProductContext = {
    schema: string;
    data: SearchResultProduct;
};

export type SearchResultsContext = {
    schema: string;
    data: SearchResults;
};

export type SearchResultSuggestionContext = {
    schema: string;
    data: SearchResultSuggestion;
};

export type ShopperContext = {
    schema: string;
    data: Shopper;
};

export type ShoppingCartContext = {
    schema: string;
    data: ShoppingCart;
};

export type StorefrontContext = {
    schema: string;
    data: Storefront;
};

export type TrackerContext = {
    schema: string;
    data: Tracker;
};

export type SnowplowContext =
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
