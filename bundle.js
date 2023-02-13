(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Algebra = {
    getSlope,
    solveQuadraticEquation,
    getMidpoint
};
function getSlope(x1, y1, x2, y2) {
    return (y2 - y1) / (x2 - x1);
}
function solveQuadraticEquation(a, b, c) {
    const discriminator = Math.sqrt((b * b) - (4 * a * c));
    const answer1 = (-b - discriminator) / (2 * a);
    const answer2 = (-b + discriminator) / (2 * a);
    return `${answer1} and ${answer2}`;
}
function getMidpoint(x1, y1, x2, y2) {
    const p1 = (x1 + x2) / 2;
    const p2 = (y1 + y2) / 2;
    return `(${p1}, ${p2})`;
}
exports.default = Algebra;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Arithmetic = {
    add,
    subtract,
    multiply,
    divide,
    getAverage,
    getMedian,
    random,
    getEvens,
    getOdds,
    leastToGreatest,
    greatestToLeast
};
function add(array) {
    return array.reduce((a, b) => a + b);
}
function subtract(array) {
    return array.reduce((a, b) => a - b);
}
function multiply(array, numOfDecimals) {
    const productToString = array.reduce((a, b) => a * b).toString();
    const productToFloat = parseFloat(productToString);
    const product = parseFloat(productToFloat.toFixed(numOfDecimals));
    return product;
}
function divide(array, numOfDecimals) {
    const quotientToString = array.reduce((a, b) => a / b).toString();
    const quotientToFloat = parseFloat(quotientToString);
    const quotient = parseFloat(quotientToFloat.toFixed(numOfDecimals));
    return quotient;
}
function getAverage(array) {
    return array.reduce((a, b) => a + b) / array.length;
}
function getMedian(array) {
    array.sort((a, b) => a - b);
    const half = Math.floor(array.length / 2);
    if (array.length % 2)
        return array[half];
    return (array[half - 1] + array[half]) / 2.0;
}
function random(min, max) {
    return Math.random() * (min - max) + min;
}
function getEvens(array) {
    return array.filter(num => num % 2 == 0);
}
function getOdds(array) {
    return array.filter(num => num % 2 == 1);
}
function leastToGreatest(array) {
    return array.sort((a, b) => a - b);
}
function greatestToLeast(array) {
    return array.sort((a, b) => b - a);
}
exports.default = Arithmetic;

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
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

},{}],5:[function(require,module,exports){
"use strict";
// import Algebra from "./Math/Algebra"
// import Arithmetic from "./Math/Arithmetic"
// import Calculus from "./Math/Calculus"
// import Geometry from "./Math/Geometry"
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = exports.Calculus = exports.Arithmetic = exports.Algebra = void 0;
// export { Algebra, Arithmetic, Calculus, Geometry }
exports.Algebra = __importStar(require("./Math/Algebra"));
exports.Arithmetic = __importStar(require("./Math/Arithmetic"));
exports.Calculus = __importStar(require("./Math/Calculus"));
exports.Geometry = __importStar(require("./Math/Geometry"));

},{"./Math/Algebra":1,"./Math/Arithmetic":2,"./Math/Calculus":3,"./Math/Geometry":4}]},{},[5]);
