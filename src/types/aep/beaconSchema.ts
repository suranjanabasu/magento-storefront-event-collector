import { Commerce } from "./commerce";
import { PageView } from "./pageView";
import { ProductListItem } from "./productListItem";

// Only add fields that are being sent to aep from us. We don't need to copy every field

/** The Beacon Schema that matches our schema object in AEP */
export type BeaconSchema = {
    eventType?: string;
    commerce?: Commerce;
    productListItems?: ProductListItem[];
    web?: PageView;
};
