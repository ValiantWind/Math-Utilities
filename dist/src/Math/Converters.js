"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Converters = {
  FtoC,
  FtoK,
  CtoF,
  CtoK,
  KtoF,
  KtoC,
  rgbToHex,
  decimalToHexadecimal,
  hexadecimalToDecimal,
  degreesToRadians,
  radiansToDegrees,
};
function FtoC(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}
function FtoK(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32) + 273;
}
function CtoF(celcius) {
  return (9 / 5) * celcius + 32;
}
function CtoK(celcius) {
  return celcius + 273;
}
function KtoF(kelvin) {
  return (9 / 5) * (kelvin - 273) + 32;
}
function KtoC(kelvin) {
  return kelvin - 273;
}
function rgbToHex(r, g, b) {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
}
function decimalToHexadecimal(decimal) {
  return decimal.toString(16); // This is way more simple than I thought
}
function hexadecimalToDecimal(hexadecimal) {
  return parseInt(hexadecimal, 16); // Wow. So simple
}
function degreesToRadians(degree) {
  return (degree * Math.PI) / 180.0;
}
function radiansToDegrees(radian) {
  return (radian * 180.0) / Math.PI;
}
exports.default = Converters;
