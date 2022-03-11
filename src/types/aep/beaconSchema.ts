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
};
