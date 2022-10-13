"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ApiError_1 = require("./ApiError");
function default_1(error, req, res, next) {
    if (error instanceof ApiError_1.ApiError) {
        return res.status(error.status).json({ status: error.status, message: error.message });
    }
    return res.status(500).json({ message: `Непередбачувана помилка - ${error}` });
}
exports.default = default_1;
