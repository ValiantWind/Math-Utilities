"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Calculus = {
    GetFactorial
};
function GetFactorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    for (var i = number - 1; i >= 1; i--) {
        number *= i;
    }
    return number;
}
exports.default = Calculus;
