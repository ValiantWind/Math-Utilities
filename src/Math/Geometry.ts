import { BaseMath } from "./Base";

export type Circumference = number;
export type CircleArea = number;

export class Geometry extends BaseMath {

  static getCircumference(radius: number): Circumference {
    this.validateNumber(radius);
    return 2 * radius * Math.PI;
  }

  static getCircleArea(radius: number): CircleArea {
    this.validateNumber(radius);
    return Math.PI * (radius ** 2);
  }
}