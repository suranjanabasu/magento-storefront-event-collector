type Extension = {
    magentoExtensionVersion: string;
};

type Product = {
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

type RecommendationUnit = {
    name: string;
    unitId: string;
    itemsCount: number;
    backupsCount: number;
    configType: string;
    source: string;
    recType: string;
    placement: string | null;
    yOffsetTop?: number | null;
    yOffsetBottom?: number | null;
};

type RecommendedItem = {
    unitId: string;
    serviceRank: number;
    displayRank: number;
    name: string;
    sku: string;
    url: string;
    imageUrl: string | null;
    prices: {
        maximum: {
            final: number | null;
            regular: number | null;
            finalAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
            regularAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
        };
        minimum: {
            final: number | null;
            regular: number | null;
            finalAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
            regularAdjustments?: Array<{
                code: string;
                amount: number;
            }>;
        };
    };
    currencyCode: string | null;
};

type SearchInput = {
    searchUnitId: string;
    source: string | null;
    queryTypes: Array<string>;
    searchRequestId: string;
    query: string;
    page: number;
    perPage: number;
    filter: Array<SearchFilter> | null;
    sort: Array<SearchSort> | null;
};

type SearchFilter = {
    name: string;
    values: Array<string>;
    operator: string;
};

type SearchSort = {
    attribute: string;
    direction: string;
};

type SearchResultCategory = {
    name: string;
    url: string;
    rank: number;
};

type SearchResultProduct = {
    name: string;
    url: string;
    rank: number;
    sku: string;
    imageUrl: string;
    price: number;
};

type SearchResults = {
    searchUnitId: string;
    searchRequestId: string;
    products: Array<SearchResultProduct> | null;
    suggestions: Array<SearchResultSuggestion> | null;
    categories: Array<SearchResultCategory> | null;
    page: number;
    perPage: number;
    productCount: number;
    categoryCount: number;
    suggestionCount: number;
    facets: Array<SearchFacet> | null;
};

type SearchFacet = {
    attribute: string;
    dataType: string;
    facetType: string;
    buckets: Array<SearchBucket>;
};

type SearchBucket = {
    tite: string;
    count: number;
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
    cartId?: string | null;
    itemsCount: number;
    subtotalExcludingTax?: number;
    items?: Array<ShoppingCartItem>;
    possibleOnepageCheckout?: boolean;
    subtotalIncludingTax?: number;
    giftMessageSelected?: boolean;
    subtotalAmount?: number;
    giftWrappingSelected?: boolean;
};

type ShoppingCartItem = {
    offerPrice: number;
    basePrice: number;
    qty: number;
    productName: string;
    cartItemId: string;
    productSku: string;
    mainImageUrl?: string;
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
};

type ExtensionContext = {
    schema: string;
    data: Extension;
};

type ProductContext = {
    schema: string;
    data: Product;
};

type RecommendationUnitContext = {
    schema: string;
    data: RecommendationUnit;
};

type RecommendedItemContext = {
    schema: string;
    data: RecommendedItem;
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
