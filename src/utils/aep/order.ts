import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { Order, Payment } from "../../types/aep";

const createOrder = (
    orderContext: sdkSchemas.Order,
    storefrontInstanceContext: sdkSchemas.StorefrontInstance,
): Order => {
    const payment = (payment: sdkSchemas.Payment): Payment => ({
        transactionID: orderContext.orderId.toString(),
        paymentAmount: orderContext.grandTotal,
        // todo ahammond these should be an enum, change in sdk, retest
        paymentType: payment.paymentMethodName,
        currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
    });

    return {
        purchaseID: orderContext.orderId.toString(),
        payments: orderContext.payments?.map(payment) ?? [],
        shipping: {
            shippingMethod: orderContext.shipping?.shippingMethod,
            shippingAmount: orderContext.shipping?.shippingAmount,
        },
    };
};

export { createOrder };
