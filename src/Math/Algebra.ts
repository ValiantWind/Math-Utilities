import { BaseMath } from "./Base";

export type Slope = number;
export type Midpoint = [number, number];
export type NthRoot = number;

export class Algebra extends BaseMath {

  /** 
  @static
	@param {number} x1 - x coordinate for point 1
 	@param {number}	y1 - y coordinate for point 1
	@param {number} x2 - x coordinate for point 2
 	@param {number} y2 - y coordinate for point 2

 	@return {number} - The slope of the given points
*/

  static getSlope(x1: number, y1: number, x2: number, y2: number): Slope {
    return (y2 - y1) / (x2 - x1);
  }

  /**
   * 
   * @param {number} a
   * @param {number} b 
   * @param {number} c 
   * @returns {[number, number] | null}
   */

  static solveQuadratic(a: number, b: number, c: number): [number, number] | null {
    this.validateNumber(a, b, c);
    const discriminant = Math.pow(b, 2) - 4 * a * c;
    if (discriminant < 0) return null;
    const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    return [root1, root2];
  }

  static getMidpoint(x1: number, y1: number, x2: number, y2: number): Midpoint {
    this.validateNumber(x1, y1, x2, y2);
    return [(x1 + x2) / 2, (y1 + y2) / 2];
  }

  static nthRoot(x: number, n: number): NthRoot {
    return Math.pow(x, 1 / n);
  }
}
