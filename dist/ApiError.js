"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }
    static badRequestError(message) {
        return new ApiError(400, message);
    }
    static notFoundError(message) {
        return new ApiError(404, message);
    }
    static internalError(message) {
        return new ApiError(500, message);
    }
}
exports.ApiError = ApiError;
