import pkg from 'express';
const express = pkg;

import { check } from 'express-validator'
import { loguear, registrar } from '../controladores/publicController.js'
import { validateInputs } from '../middlewares/validateInputs.js'

const publicRoutes = express.Router()



publicRoutes.post('/login', loguear)

publicRoutes.post('/new', registrar)



export { publicRoutes }