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
  getPrimeFactors(num: number): PrimeFactors;
  isEven(num: number): isEven;
  isOdd(num: number): isOdd;
  isPrime(num: number): isPrime;
};

const Arithmetic: BaseArithmetic = {
  add,
  subtract,
  multiply,
  divide,
  getAverage,
  getMedian,
  random,
  getEvens,
  getOdds,
  leastToGreatest,
  greatestToLeast,
  getPrimeFactors,
  isEven,
  isOdd,
  isPrime,
};

function add(array: number[]): Sum {
  const sum = [...array].reduce((acc, val) => acc + val, 0);
  return sum;
}

function subtract(array: number[]): Difference {
  return array.reduce((a, b) => a - b);
}

function multiply(array: number[], numOfDecimals?: number): Product {
  const productToString = array.reduce((a, b) => a * b).toString();
  const productToFloat = parseFloat(productToString);
  const product = parseFloat(productToFloat.toFixed(numOfDecimals));
  return product;
}

function divide(array: number[], numOfDecimals?: number): Quotient {
  const quotientToString = array.reduce((a, b) => a / b).toString();
  const quotientToFloat = parseFloat(quotientToString);
  const quotient = parseFloat(quotientToFloat.toFixed(numOfDecimals));
  return quotient;
}

function getAverage(array: number[]): Average {
  return array.reduce((a, b) => a + b) / array.length;
}

function getMedian(array: number[]): Median {
  array.sort((a, b) => a - b);

  const half = Math.floor(array.length / 2);

  if (array.length % 2) return array[half];

  return (array[half - 1] + array[half]) / 2.0;
}

function random(min: number, max: number): number {
  return Math.random() * (min - max) + min;
}

function getEvens(array: number[]): EvenNumbers {
  return array.filter((num) => num % 2 == 0);
}

function getOdds(array: number[]): OddNumbers {
  return array.filter((num) => num % 2 == 1);
}

function leastToGreatest(array: number[]): LeastToGreatest {
  return array.sort((a, b) => a - b);
}

function greatestToLeast(array: number[]): GreatestToLeast {
  return array.sort((a, b) => b - a);
}

function getPrimeFactors(num: number): PrimeFactors {
  let array = [],
    factor = 2;
  while (num > 1) {
    if (num % factor === 0) {
      array.push(factor);
      num /= factor;
    } else {
      factor++;
    }
  }
  return array;
}

function isEven(num: number): boolean {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}

function isOdd(num: number): boolean {
  if (num % 2 === 1) {
    return true;
  }
  return false;
}

function isPrime(num: number): isPrime {
  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 2; i < boundary; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 2;
}

export default Arithmetic;
