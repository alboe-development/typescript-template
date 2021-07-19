/**
 * Generic interface.
 *
 * @alpha
 */
export interface ExampleInterface {
  /**
   * The name of this object.
   */
  name: string;

  /**
   * The number associated with this object.
   */
  value: number;

  /**
   * If the object is okay.
   */
  isOkay: boolean;

  /**
   * Provided type of this object.
   */
  type: 1 | 2 | 3;
}
