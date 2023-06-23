import express from 'express'
import userController from './user.controller'

const router = express.Router()

router.post('/create-user', userController.createUser)

export default router

//=> fix the error on user module
//=> start from module 12
