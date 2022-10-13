"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFibonacciNumber = exports.fibonacciNumber = void 0;
const redisClient_1 = __importDefault(require("./redisClient"));
const fibonacciNumber = (number) => {
    let a = 0n;
    let result = 1n;
    if (number <= 1) {
        return result.toString();
    }
    for (let i = 1; i < number; i++) {
        result = a + result;
        a = result - a;
    }
    return result.toString();
};
exports.fibonacciNumber = fibonacciNumber;
const findFibonacciNumber = async (ticket, number) => {
    const fibNumber = (0, exports.fibonacciNumber)(number);
    redisClient_1.default.setTicket(ticket, fibNumber);
};
exports.findFibonacciNumber = findFibonacciNumber;
