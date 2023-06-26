import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/create-user', userController.createUser)

export default router

//=> start from module 12.2
