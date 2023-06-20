import express, { Application } from 'express'
import cors from 'cors'
const app: Application = express()

app.use(cors())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send('Api working successfully')
})

export default app
