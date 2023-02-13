export type Sum = number;
export type Difference = number;
export type Product = number;
export type Quotient = number;
export type Average = number;
export type Median = number;
export type EvenNumbers = number[];
export type OddNumbers = number[];
export type LeastToGreatest = number[];
export type GreatestToLeast = number[];
type BaseArithmetic = {
    add(array: number[]): Sum;
    subtract(array: number[]): Difference;
    multiply(array: number[], numOfDecimals?: number): Product;
    divide(array: number[], numOfDecimals?: number): Quotient;
    getAverage(array: number[]): Average;
    getMedian(array: number[]): Median;
    random(min: number, max: number): number;
    getEvens(array: number[]): EvenNumbers;
    getOdds(array: number[]): OddNumbers;
    leastToGreatest(array: number[]): LeastToGreatest;
    greatestToLeast(array: number[]): GreatestToLeast;
};
declare const Arithmetic: BaseArithmetic;
export default Arithmetic;
