/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { trackPageView } from "@snowplow/browser-tracker";

const handler = (): void => {
    trackPageView();
};

export default handler;
