# Magento Storefront Event Collector

[![version][version-badge]][npm]
[![downloads][downloads-badge]][npm]
[![size][size-badge]][bundlephobia]
[![build][build-badge]][actions]
[![typescript][typescript-badge]][typescript]
[![contributing][contributing-badge]][contributing]

## Overview

This package listens for and handles events sent from the [Magento Storefront Events SDK][sdk]. It runs as a side effect and is meant to be a convenience for users who want to send events to Magento for processing.

## Installation

The collector can be used as a hosted script, or bundled in a JavaScript application. The script version is hosted on [unpkg][unpkg], and the bundled version is hosted on [npm][npm].

To load the SDK as a script, use the following snippet.

```
<script src="https://unpkg.com/@adobe/magento-storefront-event-collector/dist/index.js"></script>
```

To install the script as a dependency, run this command.

```shell
npm install @adobe/magento-storefront-event-collector
```

## Quick Start

After loading the collector script, or importing the package as shown below, there is nothing else that needs to be done.

```javascript
import "@adobe/magento-storefront-event-collector";
```

The collector then begins listening for the following events.

-   `addToCart`
-   `instantPurchase`
-   `pageView`
-   `placeOrder`
-   `productPageView`
-   `recsItemAddToCartClick`
-   `recsItemClick`
-   `recsRequestSent`
-   `recsResponseReceived`
-   `recsUnitRender`
-   `recsUnitView`
-   `searchCategoryClick`
-   `searchProductClick`
-   `searchRequestSent`
-   `searchResponseReceived`
-   `searchResultsView`
-   `searchSuggestionClick`
-   `shoppingCartView`

The handlers forward events to two edges:

-   Adobe Commerce Data Services (maintained by Adobe Engineering and used to power merchant performance dashboards)

    Required contexts:

    `StorefrontInstance`

-   [Adobe Experience Platform](https://business.adobe.com/products/experience-platform/adobe-experience-platform.html) (requires a subscription and additional merchant [setup](https://experienceleague.adobe.com/docs/experience-platform/edge/fundamentals/datastreams.html?lang=en); data can be used by merchants inside the Adobe Experience Platform for detailed analytics, targeted merchandising, real time customer data profiles, and more)

    Required contexts:

    `AEP`

    `EventForwarding.aep: true`

## Support

If you have any questions or encounter any issues, please reach out at these locations.

-   [GitHub][issues]

[npm]: https://npmjs.com/package/@adobe/magento-storefront-event-collector
[version-badge]: https://img.shields.io/npm/v/@adobe/magento-storefront-event-collector.svg?style=flat-square
[downloads-badge]: https://img.shields.io/npm/dt/@adobe/magento-storefront-event-collector?style=flat-square
[bundlephobia]: https://bundlephobia.com/result?p=@adobe/magento-storefront-event-collector
[size-badge]: https://img.shields.io/bundlephobia/minzip/@adobe/magento-storefront-event-collector?style=flat-square
[actions]: https://github.com/adobe/magento-storefront-event-collector/actions
[build-badge]: https://img.shields.io/github/workflow/status/adobe/magento-storefront-event-collector/publish-latest?style=flat-square
[typescript]: https://typescriptlang.org/dt/search?search=%40adobe%2Fmagento-storefront-event-collector
[typescript-badge]: https://img.shields.io/npm/types/@adobe/magento-storefront-event-collector?style=flat-square
[contributing]: https://github.com/adobe/magento-storefront-event-collector/blob/main/.github/CONTRIBUTING.md
[contributing-badge]: https://img.shields.io/badge/PRs-welcome-success?style=flat-square
[sdk]: https://npmjs.com/package/@adobe/magento-storefront-events-sdk
[unpkg]: https://unpkg.com/@adobe/magento-storefront-event-collector/dist/index.js
[npm]: https://npmjs.com/package/@adobe/magento-storefront-event-collector
[magento]: https://magento.com
[issues]: https://github.com/adobe/magento-storefront-event-collector/issues
[zendesk]: https://account.magento.com/zendesk/login
