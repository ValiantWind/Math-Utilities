import { BaseMath } from "./Base";

export type Factorial = number;

export class Calculus extends BaseMath {
  static getFactorial(num: number): Factorial {
      this.validateNumber(num);
      if (num === 0 || num === 1) return 1;
      let result = num;
      for (let i = num - 1; i >= 1; i--) {
          result *= i;
      }
      return result;
  }
}