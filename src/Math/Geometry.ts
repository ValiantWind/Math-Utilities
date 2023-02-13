export type Circumference = number;
export type CircleArea = number;

type BaseGeometry = {
	getCircumference(radius: number): Circumference
	getCircleArea(radius: number): CircleArea
}

const Geometry: BaseGeometry = {
	getCircumference,
	getCircleArea
}

function getCircumference(radius: number): Circumference {
	return 2 * radius * Math.PI;
}

function getCircleArea(radius: number): CircleArea {
	return Math.PI * (radius * radius)
}

export default Geometry;