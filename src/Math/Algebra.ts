export type Slope = number;
export type Midpoint = string;
export type NthRoot = number;

type BaseAlgebra = {
  getSlope(x1: number, y1: number, x2: number, y2: number): number;
  solveQuadraticEquation(a: number, b: number, c: number): string;
  getMidpoint(x1: number, y1: number, x2: number, y2: number): string;
  getNthRoot(x: number, n: number): NthRoot;
};

const Algebra: BaseAlgebra = {
  getSlope,
  solveQuadraticEquation,
  getMidpoint,
  getNthRoot,
};

/** 
	@param {number} x1 - x coordinate for point 1
 	@param {number}	y1 - y coordinate for point 1
	@param {number} x2 - x coordinate for point 2
 	@param {number} y2 - y coordinate for point 2

 	@return {number} - The slope of the given points
*/

function getSlope(x1: number, y1: number, x2: number, y2: number): Slope {
  return (y2 - y1) / (x2 - x1);
}

function solveQuadraticEquation(a: number, b: number, c: number): string {
  const discriminator = Math.sqrt(b * b - 4 * a * c);

  const answer1 = (-b - discriminator) / (2 * a);

  const answer2 = (-b + discriminator) / (2 * a);

  return `${answer1} and ${answer2}`;
}

function getMidpoint(x1: number, y1: number, x2: number, y2: number): Midpoint {
  const p1 = (x1 + x2) / 2;
  const p2 = (y1 + y2) / 2;
  return `(${p1}, ${p2})`;
}

function getNthRoot(x: number, n: number): NthRoot {
  return Math.pow(x, 1 / n);
}

export default Algebra;
