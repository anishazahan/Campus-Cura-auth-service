import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import userRouter from './app/modules/user/user.route'

app.use(cors())

// parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// application router
app.use('/api/v1/users', userRouter)

// for testing
app.get('/', (req: Request, res: Response) => {
  res.send('working succesfully')
})

export default app
