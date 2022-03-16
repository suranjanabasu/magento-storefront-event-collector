/** View(s) of a webpage has occurred. */
export type PageViews = {
    /** Unique identifier of the measure. */
    id?: string;

    /** The quantifiable value of this measure. */
    value: number;
};

/** Details about the web page where the web interaction occurred. */
export type WebPageDetails = {
    pageViews: PageViews;
    /**
     * The normative name of the web page. This name is not necessarily the
     * page title or directly associate with page content, but is used to
     * organize a site's pages for classification purposes.
     */
    name?: string;

    /**
     * The normative name of the site section where this web page resides,
     * which may be used to classify or categorize the interaction
     */
    siteSection?: string;
};

/** Link clicks, web page details, referrer information, and browser details. */
export type Web = {
    webPageDetails: WebPageDetails;
};
