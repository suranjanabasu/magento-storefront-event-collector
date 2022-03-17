import { Commerce } from "./commerce";
import { Web } from "./pageView";
import { ProductListItem } from "./productListItem";

/** The Beacon Schema that matches our schema object in AEP */
export type BeaconSchema = {
    _id?: string;
    eventType?: string;
    commerce?: Commerce;
    productListItems?: ProductListItem[];
    web?: Web;
    _atag?: {
        account?: Account;
    };
    userAccount?: AccountActions;
};

export type Account = {
    firstName?: string;
    lastName?: string;
    personalEmail?: Email;
    accountID?: string;
    accountType?: string;
    homeAddress?: Address[];
    homePhone?: Phone;
};

export type Email = {
    address?: string;
};

export type Phone = {
    phoneNumber?: string;
    countryCode?: string;
};

export type Address = {
    street1?: string;
    street2?: string;
    city?: string;
    country?: string;
    postalCode?: string;
};

export type AccountActions = {
    login?: number;
    logout?: number;
    updateProfile?: number;
};
