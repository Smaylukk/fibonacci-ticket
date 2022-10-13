import express, { Express } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import cors from 'cors'
import router from './fibRouter'
import errorMiddleware from './errorMiddleware'
import { Worker } from 'node:worker_threads'

const start = async () => {
    const app: Express = express()
    const port = process.env.PORT || 3000

    app.set('view engine', 'ejs')
        .use(cors())
        .use(express.json())
        .use(router)
        .use(errorMiddleware)

    app.listen(port, async () => {
        console.log(
            `⚡️[server]: Fibonacci-server is running at https://localhost:${port}`
        )
    })
}

export const list: any[] = []

export const setTask = (ticket: string, number: Number) => {
    list.push({ ticket, number })
}

start()

setTimeout(() => {
    sendDataToWorker()
}, 1000)

const sendDataToWorker = () => {
    if (list.length) {
        new Worker('./dist/fibonacciWorker.js', {
            workerData: { list },
        })
        list.length = 0
    }

    setTimeout(() => {
        sendDataToWorker()
    }, 1000)
}
