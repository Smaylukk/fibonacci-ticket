"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTask = exports.list = void 0;
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const fibRouter_1 = __importDefault(require("./fibRouter"));
const errorMiddleware_1 = __importDefault(require("./errorMiddleware"));
const node_worker_threads_1 = require("node:worker_threads");
const start = async () => {
    const app = (0, express_1.default)();
    const port = process.env.PORT || 3000;
    app.set('view engine', 'ejs')
        .use((0, cors_1.default)())
        .use(express_1.default.json())
        .use(fibRouter_1.default)
        .use(errorMiddleware_1.default);
    app.listen(port, async () => {
        console.log(`⚡️[server]: Fibonacci-server is running at https://localhost:${port}`);
    });
};
exports.list = [];
const setTask = (ticket, number) => {
    exports.list.push({ ticket, number });
};
exports.setTask = setTask;
start();
setTimeout(() => {
    sendDataToWorker();
}, 1000);
const sendDataToWorker = () => {
    if (exports.list.length) {
        new node_worker_threads_1.Worker('./dist/fibonacciWorker.js', {
            workerData: { list: exports.list },
        });
        exports.list.length = 0;
    }
    setTimeout(() => {
        sendDataToWorker();
    }, 1000);
};
