import redisClient from "./redisClient";

class TicketNumber {
  currentIndex = 0;
  constructor() {
    redisClient.getCountTickets().then((res) => (this.currentIndex = res));
  }

  nextTicket() {
    this.currentIndex++;
    return this.currentIndex;
  }
}

const ticketNumber = new TicketNumber();
//Object.freeze(ticketNumber);

export default ticketNumber;
