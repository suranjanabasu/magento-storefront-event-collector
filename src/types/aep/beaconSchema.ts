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
    person?: Account;
    personID?: string;
    personalEmail?: Email;
    userAccount?: AccountActions;
};

export type Account = {
    accountID?: string;
    accountType?: string;
    personalEmailID?: string;
};

export type Email = {
    address?: string;
};

export type AccountActions = {
    login?: number;
    logout?: number;
    createProfile?: number;
    updateProfile?: number;
};
