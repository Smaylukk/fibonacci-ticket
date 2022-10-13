import { ApiError } from './ApiError'
import redisClient from './redisClient'
import ticketNumber from './ticketNumber'
import { setTask } from '.'

export class FibonacciController {
    async createTicket(req, res, next) {
        try {
            let { number } = req.body

            if (!number) {
                return next(ApiError.badRequestError(`Wrong request body`))
            }

            try {
                number = parseInt(number)
            } catch (e) {
                return next(
                    ApiError.badRequestError(
                        `Parametr number must be type Number`
                    )
                )
            }
            const ticket = ticketNumber.nextTicket().toString()
            redisClient.setTicket(ticket.toString(), 'Not found')

            setTask(ticket, number)

            return res.json({ ticket })
        } catch (error: any) {
            return next(ApiError.badRequestError(error.message))
        }
    }

    async testTicket(req, res, next) {
        try {
            let { number } = req.query

            if (!number) {
                return next(ApiError.badRequestError(`Wrong request body`))
            }

            try {
                number = parseInt(number)
            } catch (e) {
                return next(
                    ApiError.badRequestError(
                        `Parametr number must be type Number`
                    )
                )
            }
            const ticket = ticketNumber.nextTicket().toString()
            redisClient.setTicket(ticket.toString(), 'Not found')

            setTask(ticket, number)

            return res.json({ ticket })
        } catch (error: any) {
            return next(ApiError.badRequestError(error.message))
        }
    }

    async checkTicket(req, res, next) {
        try {
            let { ticket } = req.query

            if (!ticket) {
                return next(ApiError.badRequestError(`Wrong request body`))
            }

            const fibonacci = await redisClient.getTicket(ticket)

            const payload = { Fibonacci: fibonacci }
            return res.json(payload)
        } catch (error: any) {
            return next(ApiError.badRequestError(error.message))
        }
    }
}

export default new FibonacciController()
