import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()
import globalErrorHandeler from './middleware/globalerrorHandeler'
import { UserRoutes } from './app/modules/user/user.route'

app.use(cors())

// parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application router
app.use('/api/v1/users', UserRoutes)

// for testing
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   //  throw new apiError(400,"error hoyece")
//   next('error kaice')
// })

// global error handeler

app.use(globalErrorHandeler)

export default app
