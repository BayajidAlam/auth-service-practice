import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
  response,
} from 'express'
import cors from 'cors'
import userRoute from './app/modules/user/user.route'
import globalErrorHandler from './app/middlewares/globalErrorHandler'

const app: Application = express()

// parser
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', userRoute)

// testing api
app.get('/okk', (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Ora baba error')
})

// global error handler
app.use(globalErrorHandler)

export default app
