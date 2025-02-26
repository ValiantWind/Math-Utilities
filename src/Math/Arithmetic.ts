import { BaseMath } from "./Base";

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
export type PrimeFactors = number[];
export type isPrime = boolean;
export type isEven = boolean;
export type isOdd = boolean;
export type GreatestCommonDenominator = number;

export class Arithmetic extends BaseMath {
  static add(array: number[]): Sum {
      this.validateNumber(...array);
      return array.reduce((acc, val) => acc + val, 0);
  }

  static subtract(array: number[]): Difference {
      this.validateNumber(...array);
      return array.reduce((a, b) => a - b);
  }

  static multiply(array: number[], numOfDecimals?: number): Product {
      this.validateNumber(...array);
      const product = array.reduce((a, b) => a * b);
      return numOfDecimals !== undefined ? parseFloat(product.toFixed(numOfDecimals)) : product;
  }

  static divide(array: number[], numOfDecimals?: number): Quotient {
      this.validateNumber(...array);
      const quotient = array.reduce((a, b) => a / b);
      return numOfDecimals !== undefined ? parseFloat(quotient.toFixed(numOfDecimals)) : quotient;
  }

  static getAverage(array: number[]): Average {
      this.validateNumber(...array);
      return this.add(array) / array.length;
  }

  static getMedian(array: number[]): Median {
      this.validateNumber(...array);
      array.sort((a, b) => a - b);
      const half = Math.floor(array.length / 2);
      return array.length % 2 ? array[half] : (array[half - 1] + array[half]) / 2.0;
  }

  static random(min: number, max: number): number {
      this.validateNumber(min, max);
      return Math.random() * (max - min) + min;
  }

  static getEvens(array: number[]): EvenNumbers {
      this.validateNumber(...array);
      return array.filter((num) => num % 2 === 0);
  }

  static getOdds(array: number[]): OddNumbers {
      this.validateNumber(...array);
      return array.filter((num) => num % 2 === 1);
  }

  static leastToGreatest(array: number[]): LeastToGreatest {
      this.validateNumber(...array);
      return [...array].sort((a, b) => a - b);
  }

  static greatestToLeast(array: number[]): GreatestToLeast {
      this.validateNumber(...array);
      return [...array].sort((a, b) => b - a);
  }

  static getPrimeFactors(num: number): PrimeFactors {
      this.validateNumber(num);
      let factors = [], factor = 2;
      while (num > 1) {
          if (num % factor === 0) {
              factors.push(factor);
              num /= factor;
          } else {
              factor++;
          }
      }
      return factors;
  }

  static isEven(num: number): isEven {
      this.validateNumber(num);
      return num % 2 === 0;
  }

  static isOdd(num: number): isOdd {
      this.validateNumber(num);
      return num % 2 === 1;
  }

  static isPrime(num: number): isPrime {
      this.validateNumber(num);
      if (num < 2) return false;
      for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
          if (num % i === 0) return false;
      }
      return true;
  }
}
