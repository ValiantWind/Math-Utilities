export type Factorial = number;

type BaseCalculus = {
	GetFactorial(number: number): Factorial
}

const Calculus: BaseCalculus = {
	GetFactorial
}

function GetFactorial(number: number): Factorial {
	if (number === 0 || number === 1){
		return 1;
	}
	for (var i = number - 1; i >= 1; i--) {
		number *= i;
	} 
	return number
}

export default Calculus;