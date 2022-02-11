/**
 * A list of items representing a product selected by a customer with specific
 * options and pricing that are for that usage context at a specific point of
 * time and may differ from the product record.
 */
export interface ProductListItem {
    /**
     * Stock keeping unit (SKU), the unique identifier for a product defined
     * by the vendor.
     */
    SKU: string;
    /**
     * The display name for the product as presented to the user for this
     * product view.
     */
    name: string;
    /**
     * The number of units the customer has indicated they require of the
     * product.
     */
    quantity?: number;
    /**
     * The total price for the product line item.
     */
    priceTotal?: number;
    /**
     * The ISO 4217 alphabetic currency code used for pricing the product.
     */
    currencyCode?: string;
}
