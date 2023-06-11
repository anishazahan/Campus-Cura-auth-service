import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
import userRouter from './app/modules/user/user.route'
import globalErrorHandeler from './middleware/globalerrorHandeler'

app.use(cors())

// parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application router
app.use('/api/v1/users', userRouter)

// for testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //  throw new apiError(400,"error hoyece")
//   next('error kaice')
// })

// global error handeler

app.use(globalErrorHandeler)

export default app
