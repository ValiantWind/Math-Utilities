export type Factorial = number;
type BaseCalculus = {
  getFactorial(number: number): Factorial;
};
declare const Calculus: BaseCalculus;
export default Calculus;
