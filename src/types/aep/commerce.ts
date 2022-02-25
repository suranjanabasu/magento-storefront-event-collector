/* top level object for all transaction events */
export type Commerce = {
    productListAdds?: ProductListAdds;
    order?: Order;
    shipping?: Shipping;
    promotionID?: string;
    productViews?: ProductView;
};

export type ProductListAdds = {
    id?: string;
    value: number;
};

export type ProductView = {
    id?: string;
    value: number;
};

export type Shipping = {
    shippingMethod?: string;
    shippingAmount?: number;
};

export type Order = {
    purchaseID: string;
    payments: Payment[];
};

export type Payment = {
    transactionID?: string;
    paymentAmount?: number;
    paymentType?: string;
    currencyCode?: string;
};
