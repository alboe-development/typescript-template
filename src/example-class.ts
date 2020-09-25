/**
 * Generic class.
 *
 * @public
 */
export default class Example {
  private x: number;

  private y: number;

  /**
   * Generic constructor.
   *
   * @param x - The value of x.
   * @param y - The value of y.
   * @returns - New Example class instance.
   */
  public constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Generic class instance method.
   *
   * @returns - The product of x and y.
   */
  public multiply(): number {
    return this.x * this.y;
  }
}
