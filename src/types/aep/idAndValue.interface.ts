// i really don't know what else to call this class, `Base` sounds way to generic
// and

/** A base class that includes id and value properties.
 * You should only be extending this interface.
 */
export interface IdAndValue {
    /**
     * Unique identifier of the measure. In cases of data collection using
     * lossy communication channels, such as mobile apps or websites with
     * offline functionality, where transmission of measures cannot be ensured,
     * this property contains a client-generated, unique ID of the measure
     * taken. It is best practice to make this sufficiently long to ensure
     * enough entropy. Additionally, if information such as time stamp, device
     * ID, IP, or MAC address, or other potentially user-identifying values are
     * incorporated in the generation of the xdm:id, the result should be
     * hashed, so that no PII is encoded in the value, as the goal is not to
     * identify user or device, but the specific measure in time.
     * */
    id?: string;
    /** The quantifiable value of this measure. */
    value: 1;
}
