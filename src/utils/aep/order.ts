import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { Order, Payment } from "../../types/aep";

const createOrder = (
    orderContext: sdkSchemas.Order,
    storefrontInstanceContext: sdkSchemas.StorefrontInstance,
): Order => {
    const payment: Payment = {
        transactionID: orderContext.orderId.toString(),
        paymentAmount: orderContext.grandTotal,
        // todo ahammond these should be an enum, change in sdk, retest
        paymentType: orderContext.paymentMethodName,
        currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
    };

    return {
        purchaseID: orderContext.orderId.toString(),
        payments: [payment],
        shipping: {
            shippingMethod: orderContext.shipping?.shippingMethod,
            shippingAmount: Number(orderContext.shipping?.shippingAmount),
        },
    };
};

export { createOrder };
