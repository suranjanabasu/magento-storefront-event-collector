/* top level object for all transaction events */
export type Commerce = {
    productListAdds?: ProductListAdds;
    productListViews?: ProductListViews;
    cart?: Cart;
    cartAbandons?: CartAbandon;
    checkouts?: Checkout;
    purchases?: Purchases;
    order?: Order;
    promotionID?: string;
    productViews?: ProductView;
    search?: Search;
    searchRequest?: SearchRequest;
    searchResponse?: SearchResponse;
    shipping?: Shipping;
};

export type ProductView = {
    value: number;
};

export type Cart = {
    cartID: string | null;
};

export type Purchases = {
    value: number;
};

export type Order = {
    purchaseID: string;
    purchaseOrderNumber?: string;
    payments: Payment[];
    priceTotal?: number;
    currencyCode?: string;
};

export type Shipping = {
    shippingMethod?: string;
    shippingAmount?: number;
};

export type Payment = {
    transactionID?: string;
    paymentAmount?: number;
    paymentType?: string;
    currencyCode?: string;
};

export type Checkout = {
    value: number;
};

/**
 * Addition of a product to the product list, for example a product is added
 * to a shopping cart.
 */
export type ProductListAdds = {
    id?: string;
    value: number;
};

/** View or views of a product-list has occurred. */
export type ProductListViews = {
    value: number;
};

export type CartAbandon = {
    value: number;
};

export type Search = {
    query?: string;
    refinements?: Filter[];
    sort?: Sort[];
    suggestions?: string[];
    numberOfResults?: number;
};

export type Filter = {
    attribute: string;
    value: string[];
    isRange: boolean;
};

export type Sort = {
    attribute: string;
    order: "ASC" | "DESC";
};

export type SearchRequest = {
    value: number;
};

export type SearchResponse = {
    value: number;
};
