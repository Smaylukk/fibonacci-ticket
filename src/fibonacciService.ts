import redisClient from "./redisClient";

export const fibonacciNumber = (number:number):string => {
    let a:bigint = 0n;
    let result:bigint = 1n;
    if(number <= 1){
      return result.toString();
    }
    for (let i = 1; i < number; i++) {
        result = a + result;
        a = result - a;
    }
    return result.toString()
}

export const findFibonacciNumber = async (ticket:string, number:number) => {
    const fibNumber = fibonacciNumber(number);
    redisClient.setTicket(ticket, fibNumber);
}