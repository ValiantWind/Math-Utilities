export type Slope = number;
export type Midpoint = string;
export type NthRoot = number;
type BaseAlgebra = {
  getSlope(x1: number, y1: number, x2: number, y2: number): number;
  solveQuadraticEquation(a: number, b: number, c: number): string;
  getMidpoint(x1: number, y1: number, x2: number, y2: number): string;
  getNthRoot(x: number, n: number): NthRoot;
};
declare const Algebra: BaseAlgebra;
export default Algebra;
