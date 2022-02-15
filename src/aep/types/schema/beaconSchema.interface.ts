import { Commerce } from "./commerce.interface";
import { WebPageDetails } from "./pageView.interface";
import { ProductListItem } from "./productListItems.interface";

// Only add fields that are being sent to aep from us. We don't need to copy every field

/** The Beacon Schema that matches our schema object in AEP */
export interface BeaconSchema {
    commerce?: Commerce;
    productListItems?: ProductListItem[];
    web?: WebPageDetails;
}
