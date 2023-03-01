export type Factorial = number;

type BaseCalculus = {
  getFactorial(number: number): Factorial;
};

const Calculus: BaseCalculus = {
  getFactorial,
};

function getFactorial(number: number): Factorial {
  if (number === 0 || number === 1) {
    return 1;
  }
  for (var i = number - 1; i >= 1; i--) {
    number *= i;
  }
  return number;
}

export default Calculus;
