export class ApiError extends Error {
  status: number;

  constructor(status:number, message: string) {
    super()
    this.status = status
    this.message = message
  }

  static badRequestError(message: string) {
    return new ApiError(400, message)
  }

  static notFoundError(message: string) {
    return new ApiError(404, message)
  }

  static internalError(message: string) {
    return new ApiError(500, message)
  }
}