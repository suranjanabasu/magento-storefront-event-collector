/* top level object for all transaction events */
export type Commerce = {
    productListAdds?: ProductListAdds;
    productListViews?: ProductListViews;
    cart?: Cart;
    cartAbandons?: CartAbandon;
    checkouts?: Checkout;
    order?: Order;
    promotionID?: string;
    productViews?: ProductView;
    search?: Search;
    searchRequest?: SearchRequest;
    searchResponse?: SearchResponse;
};

export type ProductView = {
    id?: string;
    value: number;
};

export type Cart = {
    ID?: string | null;
};

export type Order = {
    purchaseID: string;
    payments: Payment[];
    shipping?: Shipping;
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
    id?: string;
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
    id?: string;
    value: number;
};

export type CartAbandon = {
    id?: string;
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
    id?: string;
    value: number;
};

export type SearchResponse = {
    id?: string;
    value: number;
};
