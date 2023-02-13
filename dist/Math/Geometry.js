"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Geometry = {
    getCircumference,
    getCircleArea
};
function getCircumference(radius) {
    return 2 * radius * Math.PI;
}
function getCircleArea(radius) {
    return Math.PI * (radius * radius);
}
exports.default = Geometry;
