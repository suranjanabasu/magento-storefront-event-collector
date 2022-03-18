import * as sdkSchemas from "@adobe/magento-storefront-events-sdk/dist/types/types/schemas";

import { Account, Address } from "../../types/aep";

const createAccount = (accountContext: sdkSchemas.Account): Account => {
    const { shippingAddress, emailAddress, firstName, lastName } =
        accountContext;
    const address: Address = {
        city: shippingAddress?.city,
        country: shippingAddress?.country,
        postalCode: shippingAddress?.postalCode,
    };

    if (shippingAddress?.street && shippingAddress.street.length) {
        address.street1 = shippingAddress.street[0];
        if (shippingAddress.street.length > 1) {
            address.street2 = shippingAddress.street[1];
        }
    }

    return {
        accountID: accountContext.accountId,
        accountType: accountContext.accountType,
        personalEmail: {
            address: emailAddress,
        },
        firstName,
        lastName,
        homePhone: {
            phoneNumber: shippingAddress?.phoneNumber,
            countryCode: accountContext.countryCode,
        },
        homeAddress: [address],
    };
};

export { createAccount };
