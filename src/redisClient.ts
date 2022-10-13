import { RedisClientType } from "@redis/client";
import { createClient } from "redis";

class RedisClient {
  redis: RedisClientType;

  constructor() {
    this.redis = createClient({
      url: `${process.env.REDIS_URL}`,
    });
    this.redis.connect();
  }

  async getCountTickets(): Promise<number> {
    let countTickets = await this.redis.get("tickets");
    let result = countTickets ? parseInt(countTickets) : 0;

    return result;
  }

  async setTicket(key: string, value: string): Promise<void> {
    await this.redis.set(key, value);
    await this.redis.INCR("tickets");
  }

  async getTicket(ticket: string): Promise<string> {
    const ticketValue = await this.redis.get(ticket);
    const result = ticketValue ?? "Not found";

    return result;
  }

  async clearRedis(): Promise<void> {
    await this.redis.flushAll();
  }
}

const redisClient = new RedisClient();

export default redisClient;
