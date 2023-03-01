"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arithmetic = {
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
function add(array) {
  const sum = [...array].reduce((acc, val) => acc + val, 0);
  return sum;
}
function subtract(array) {
  return array.reduce((a, b) => a - b);
}
function multiply(array, numOfDecimals) {
  const productToString = array.reduce((a, b) => a * b).toString();
  const productToFloat = parseFloat(productToString);
  const product = parseFloat(productToFloat.toFixed(numOfDecimals));
  return product;
}
function divide(array, numOfDecimals) {
  const quotientToString = array.reduce((a, b) => a / b).toString();
  const quotientToFloat = parseFloat(quotientToString);
  const quotient = parseFloat(quotientToFloat.toFixed(numOfDecimals));
  return quotient;
}
function getAverage(array) {
  return array.reduce((a, b) => a + b) / array.length;
}
function getMedian(array) {
  array.sort((a, b) => a - b);
  const half = Math.floor(array.length / 2);
  if (array.length % 2) return array[half];
  return (array[half - 1] + array[half]) / 2.0;
}
function random(min, max) {
  return Math.random() * (min - max) + min;
}
function getEvens(array) {
  return array.filter((num) => num % 2 == 0);
}
function getOdds(array) {
  return array.filter((num) => num % 2 == 1);
}
function leastToGreatest(array) {
  return array.sort((a, b) => a - b);
}
function greatestToLeast(array) {
  return array.sort((a, b) => b - a);
}
function getPrimeFactors(num) {
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
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  }
  return false;
}
function isPrime(num) {
  const boundary = Math.floor(Math.sqrt(num));
  for (let i = 2; i < boundary; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num >= 2;
}
exports.default = Arithmetic;
