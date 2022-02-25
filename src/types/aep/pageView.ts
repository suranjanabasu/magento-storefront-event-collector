/** View(s) of a webpage has occurred. */
export type PageView = {
    pageViews: {
        id?: string;
        value: number;
    };
};

/** Details about the web page where the web interaction occurred. */
export type WebPageDetails = {
    webPageDetails: PageView;
};
