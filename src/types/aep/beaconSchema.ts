import { Commerce } from "./commerce";
import { PageView } from "./pageView";
import { ProductListItem } from "./productListItem";

/** The Beacon Schema that matches our schema object in AEP */
export type BeaconSchema = {
    eventType?: string;
    web?: PageView;
    commerce?: Commerce;
    productListItems?: ProductListItem[];
};
