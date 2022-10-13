"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
class RedisClient {
    constructor() {
        this.redis = (0, redis_1.createClient)({
            url: `${process.env.REDIS_URL}`,
        });
        this.redis.connect();
    }
    async getCountTickets() {
        let countTickets = await this.redis.get("tickets");
        let result = countTickets ? parseInt(countTickets) : 0;
        return result;
    }
    async setTicket(key, value) {
        await this.redis.set(key, value);
        await this.redis.INCR("tickets");
    }
    async getTicket(ticket) {
        const ticketValue = await this.redis.get(ticket);
        const result = ticketValue ?? "Not found";
        return result;
    }
    async clearRedis() {
        await this.redis.flushAll();
    }
}
const redisClient = new RedisClient();
exports.default = redisClient;
