import express from "express"
export const App = express()
import { createUserController } from './useCases/createUser'
import { loginController } from './useCases/login/index'



//Create
App.post('/signup', (req, res) => createUserController.execute(req, res))

//Authenticate
App.post('/login', (req, res) => loginController.execute(req, res))

export { userRouter }