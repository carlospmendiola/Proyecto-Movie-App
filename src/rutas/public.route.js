import { Router } from 'express';
import { check } from 'express-validator'

import { loguear, registrar } from '../controladores/publicController.js'
import { validateInputs } from '../middlewares/validateInputs.js'

export const publicRoutes = Router()



publicRoutes.post('/login', loguear)

publicRoutes.post('/new', registrar)
