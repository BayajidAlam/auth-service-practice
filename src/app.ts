import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import routes from './app/modules/user/user.route'
const app: Application = express()

// parser
app.use(cors())
app.use(express.urlencoded({ extended: true }))

// Application routes
app.use('/api/v1/users/', routes)

// testing api
app.get('/', async (req: Request, res: Response) => {
  res.send('Api working successfully')
})

export default app
