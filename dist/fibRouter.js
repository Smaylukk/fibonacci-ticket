"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const FibonacciController_1 = __importDefault(require("./FibonacciController"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.render('home');
});
router.post('/input', FibonacciController_1.default.createTicket);
router.get('/input', FibonacciController_1.default.testTicket);
router.get('/output', FibonacciController_1.default.checkTicket);
exports.default = router;
