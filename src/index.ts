/*
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

import "@adobe/adobe-client-data-layer";
import { subscribeToEvents } from "./events";

subscribeToEvents();

export * from "./collector";
export * from "./events";
