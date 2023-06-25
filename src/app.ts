import express, {
  Application,
  NextFunction,
  Request,
  Response,
  request,
  response,
} from 'express'
import cors from 'cors'
import routes from './app/modules/user/user.route'
const app: Application = express()

// parser
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', routes)

class ApiError extends Error {
  statusCode: number

  constructor(statusCode: number, message: string | undefined, stack?: '') {
    super(message)
    this.statusCode = statusCode
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

// testing api
app.get('/', (req: Request, res: Response, next: NextFunction) => {
  throw new Error('Ora baba error')
  // next('not implemented')
})

// global error handler
app.use((err, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    res.status(400).json({ error: err })
  } else {
    res.status(500).json({ error: 'Something went wrong' })
  }
})

export default app
