export type Factorial = number;
type BaseCalculus = {
    GetFactorial(number: number): Factorial;
};
declare const Calculus: BaseCalculus;
export default Calculus;
