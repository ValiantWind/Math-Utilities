export type Slope = number;
export type Midpoint = string;
type BaseAlgebra = {
    getSlope(x1: number, y1: number, x2: number, y2: number): number;
    solveQuadraticEquation(a: number, b: number, c: number): string;
    getMidpoint(x1: number, y1: number, x2: number, y2: number): string;
};
declare const Algebra: BaseAlgebra;
export default Algebra;
