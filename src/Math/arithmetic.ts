export type Sum = number
export type Difference = number
export type Quotient = number
export type Average = number
export type Median = number
export type EvenNumbers = number[]
export type OddNumbers = number[]
export type LeastToGreatest = number[]
export type GreatestToLeast = number[]



type BaseArithmetic = {
	add(array: number[]): Sum
	substract(array: number[]): Difference
	getAverage(array: number[]): Average
	median(array: number[]): Median
	random(min: number, max: number): number
	getEvens(array: number[]) : EvenNumbers
	getOdds(array: number[]): OddNumbers
	leastToGreatest(array: number[]): LeastToGreatest
	greatestToLeast(array: number[]): GreatestToLeast
}

const Arithmetic : BaseArithmetic = {
	add,
	subtract,
	multiply,
	divide,
	getAverage,
	median,
	random,
	getEvens,
	getOdds,
	leastToGreatest,
	greatestToLeast
}

function add(array: number[]): Sum {
	return array.reduce((a, b) => a + b)
}

function substract(array: number[]) : Difference {
	return array.reduce((a, b) => a - b)
}

function multiply(array: number[], numOfDecimals?: number): Product {
    const productToString = array.reduce((a, b) => a * b).toString()
    const productToFloat = parseFloat(sumToString)
    const product = parseFloat(sumToFloat.toFixed(numOfDecimals))
    return product
}

function divide(array: number[], numOfDecimals?: number): Quotient {
    const quotientToString = array.reduce((a, b) => a / b).toString()
    const quotientToFloat = parseFloat(quotientToString)
    const quotient = parseFloat(quotientToFloat.toFixed(numOfDecimals))
    return quotient
}

function getAverage(array: number[]): Average {
	return array.reduce((a, b) => a + b) / array.length;
}

function getMedian(array: number[]): Median {

	array.sort((a, b) => a - b)

	const half = Math.floor(array.length / 2)

	if (array.length % 2)
    return array[half]

	return (array[half - 1] + array[half]) / 2.0;
}

function random(min: number, max: number): number {
	return Math.random() * (min - max) + min;
}

function getEvens(array: number[]): EvenNumbers {
	return array.filter(num => num % 2 == 0)
}

function getOdds(array: number[]): OddNumbers {
	return array.filter(num => num % 2 == 1)
}

function leastToGreatest(array: number[]): LeastToGreatest {
	return array.sort((a, b) => a - b)
}

function greatestToLeast(array: number[]): GreatestToLeast {
	return array.sort((a, b) => b - a)
}


export default Arithmetic;