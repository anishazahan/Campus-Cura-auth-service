import { NextFunction, Response, Request } from 'express'
import Config from '../Config/index'
import { IGenericErrorMessage } from '../interfaces/error'
import handleValidationError from '../errors/handleValidationError'

const globalErrorHandeler = (
  error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500
  let message = 'Something went wrong !'
  let errorMessages: IGenericErrorMessage[] = []

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorMessages = simplifiedError.errorMessages
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: Config.env !== 'production' ? error?.stack : undefined,
  })
  next()
}

export default globalErrorHandeler
