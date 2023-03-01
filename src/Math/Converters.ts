export type Celcius = number;
export type Fahrenheit = number;
export type Kelvin = number;
export type Hex = string;
export type Hexadecimal = string;
export type Decimal = number;
export type Degrees = number;
export type Radians = number;

type BaseConverters = {
  FtoC(fahrenheit: number): Celcius;
  FtoK(fahrenheit: number): Kelvin;
  CtoF(celcius: number): Fahrenheit;
  CtoK(celcius: number): Kelvin;
  KtoF(kelvin: number): Fahrenheit;
  KtoC(kelvin: number): Celcius;
  rgbToHex(r: number, g: number, b: number): Hex;
  decimalToHexadecimal(decimal: number): Hexadecimal;
  hexadecimalToDecimal(hexadecimal: string): Decimal;
  degreesToRadians(degree: number): Radians;
  radiansToDegrees(radian: number): Degrees;
};

const Converters: BaseConverters = {
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

function FtoC(fahrenheit: number): Celcius {
  return (5 / 9) * (fahrenheit - 32);
}

function FtoK(fahrenheit: number): Kelvin {
  return (5 / 9) * (fahrenheit - 32) + 273;
}

function CtoF(celcius: number): Fahrenheit {
  return (9 / 5) * celcius + 32;
}

function CtoK(celcius: number): Kelvin {
  return celcius + 273;
}

function KtoF(kelvin: number): Fahrenheit {
  return (9 / 5) * (kelvin - 273) + 32;
}

function KtoC(kelvin: number): Celcius {
  return kelvin - 273;
}

function rgbToHex(r: number, g: number, b: number): Hex {
  return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
}

function decimalToHexadecimal(decimal: number): Hexadecimal {
  return decimal.toString(16); // This is way more simple than I thought
}

function hexadecimalToDecimal(hexadecimal: string): Decimal {
  return parseInt(hexadecimal, 16); // Wow. So simple
}

function degreesToRadians(degree: number): Radians {
  return (degree * Math.PI) / 180.0;
}

function radiansToDegrees(radian: number): Degrees {
  return (radian * 180.0) / Math.PI;
}

export default Converters;
