export type Circumference = number;
export type CircleArea = number;
type BaseGeometry = {
  getCircumference(radius: number): Circumference;
  getCircleArea(radius: number): CircleArea;
};
declare const Geometry: BaseGeometry;
export default Geometry;
