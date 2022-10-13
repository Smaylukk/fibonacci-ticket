"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redisClient_1 = __importDefault(require("./redisClient"));
class TicketNumber {
    constructor() {
        this.currentIndex = 0;
        redisClient_1.default.getCountTickets().then((res) => (this.currentIndex = res));
    }
    nextTicket() {
        this.currentIndex++;
        return this.currentIndex;
    }
}
const ticketNumber = new TicketNumber();
//Object.freeze(ticketNumber);
exports.default = ticketNumber;
