import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { Order, Payment } from "../../types/aep";

const createOrder = (
    orderContext: sdkSchemas.Order,
    storefrontInstanceContext: sdkSchemas.StorefrontInstance,
): Order => {
    // TODO ahammond xdm schema honors multiple payment types but SDK doesn't
    // revisit this single item list after SDK changes
    const payment: Payment = {
        transactionID: orderContext.orderId.toString(),
        paymentAmount: orderContext.grandTotal,
        paymentType: orderContext.paymentMethodName,
        currencyCode: storefrontInstanceContext.storeViewCurrencyCode,
    };

    return {
        purchaseID: orderContext.orderId.toString(),
        payments: [payment],
    };
};

export { createOrder };
