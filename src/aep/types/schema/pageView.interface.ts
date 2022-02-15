import { IdAndValue } from "./idAndValue.interface";

/** View(s) of a webpage has occurred. */
export interface PageView {
    pageViews: IdAndValue;
}

/** Details about the web page where the web interaction occurred. */
export interface WebPageDetails {
    webPageDetails: PageView;
}
