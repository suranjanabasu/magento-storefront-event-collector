import { BeaconSchema } from "../../types/aep";

export type CommandType = "configure" | "sendEvent";

export type ConfigOptions = {
    // required fields
    edgeConfigId: string;
    orgId: string;

    // non-required fields
    /** defaults to false */
    debugEnabled?: boolean;

    /** defaults to "in" */
    defaultConsent?: "in" | "out" | "pending";

    /** defaults to edge.adobedc.net */
    edgeDomain?: string;

    edgeBasePath?: string;

    onBeforeEventSend?: () => void;
};

export interface XDM<T> {
    xdm: T;
}

export type AlloyInstance = (
    command: CommandType,
    options?: ConfigOptions | XDM<BeaconSchema>,
) => Promise<void>;

export type Alloy = {
    sendEvent: (schema: BeaconSchema) => void;
};
