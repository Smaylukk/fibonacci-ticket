"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FibonacciController = void 0;
const ApiError_1 = require("./ApiError");
const redisClient_1 = __importDefault(require("./redisClient"));
const ticketNumber_1 = __importDefault(require("./ticketNumber"));
const _1 = require(".");
class FibonacciController {
    async createTicket(req, res, next) {
        try {
            let { number } = req.body;
            if (!number) {
                return next(ApiError_1.ApiError.badRequestError(`Wrong request body`));
            }
            try {
                number = parseInt(number);
            }
            catch (e) {
                return next(ApiError_1.ApiError.badRequestError(`Parametr number must be type Number`));
            }
            const ticket = ticketNumber_1.default.nextTicket().toString();
            redisClient_1.default.setTicket(ticket.toString(), 'Not found');
            (0, _1.setTask)(ticket, number);
            return res.json({ ticket });
        }
        catch (error) {
            return next(ApiError_1.ApiError.badRequestError(error.message));
        }
    }
    async testTicket(req, res, next) {
        try {
            let { number } = req.query;
            if (!number) {
                return next(ApiError_1.ApiError.badRequestError(`Wrong request body`));
            }
            try {
                number = parseInt(number);
            }
            catch (e) {
                return next(ApiError_1.ApiError.badRequestError(`Parametr number must be type Number`));
            }
            const ticket = ticketNumber_1.default.nextTicket().toString();
            redisClient_1.default.setTicket(ticket.toString(), 'Not found');
            (0, _1.setTask)(ticket, number);
            return res.json({ ticket });
        }
        catch (error) {
            return next(ApiError_1.ApiError.badRequestError(error.message));
        }
    }
    async checkTicket(req, res, next) {
        try {
            let { ticket } = req.query;
            if (!ticket) {
                return next(ApiError_1.ApiError.badRequestError(`Wrong request body`));
            }
            const fibonacci = await redisClient_1.default.getTicket(ticket);
            const payload = { Fibonacci: fibonacci };
            return res.json(payload);
        }
        catch (error) {
            return next(ApiError_1.ApiError.badRequestError(error.message));
        }
    }
}
exports.FibonacciController = FibonacciController;
exports.default = new FibonacciController();
