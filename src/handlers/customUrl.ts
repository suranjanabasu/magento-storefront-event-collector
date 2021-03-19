/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import { analytics } from "../analytics";

const handler = (): void => {
    analytics.track("customUrl");
};

export default handler;
