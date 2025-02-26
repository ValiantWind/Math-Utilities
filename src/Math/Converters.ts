import { BaseMath } from "./Base";

export type Celcius = number;
export type Fahrenheit = number;
export type Kelvin = number;
export type Hex = string;
export type Hexadecimal = string;
export type Decimal = number;
export type Degrees = number;
export type Radians = number;

export class Converters extends BaseMath {
    static FtoC(fahrenheit: number): Celcius {
        this.validateNumber(fahrenheit);
        return (5 / 9) * (fahrenheit - 32);
    }

    static FtoK(fahrenheit: number): Kelvin {
        this.validateNumber(fahrenheit);
        return (5 / 9) * (fahrenheit - 32) + 273;
    }

    static CtoF(celcius: number): Fahrenheit {
        this.validateNumber(celcius);
        return (9 / 5) * celcius + 32;
    }

    static CtoK(celcius: number): Kelvin {
        this.validateNumber(celcius);
        return celcius + 273;
    }

    static KtoF(kelvin: number): Fahrenheit {
        this.validateNumber(kelvin);
        return (9 / 5) * (kelvin - 273) + 32;
    }

    static KtoC(kelvin: number): Celcius {
        this.validateNumber(kelvin);
        return kelvin - 273;
    }

    static rgbToHex(r: number, g: number, b: number): Hex {
        this.validateNumber(r, g, b);
        return ((r << 16) + (g << 8) + b).toString(16).padStart(6, "0");
    }

    static decimalToHexadecimal(decimal: number): Hexadecimal {
        this.validateNumber(decimal);
        return decimal.toString(16);
    }

    static hexadecimalToDecimal(hexadecimal: string): Decimal {
        return parseInt(hexadecimal, 16);
    }

    static degreesToRadians(degree: number): Radians {
        this.validateNumber(degree);
        return (degree * Math.PI) / 180.0;
    }

    static radiansToDegrees(radian: number): Degrees {
        this.validateNumber(radian);
        return (radian * 180.0) / Math.PI;
    }
}