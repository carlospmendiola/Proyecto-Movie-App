import { Router } from "express";
import { check } from "express-validator";

import { login, signup } from "../controllers/auth.controller.js";
import { validateInputs } from "../middlewares/validateInputs.js";

export const authRoutes = Router();

authRoutes.post("/login",
  [
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateInputs
  ],
  login);

authRoutes.post("/signup",
  [
    check('name', 'El usuario debe tener un alias asociado').not().isEmpty(),
    check('email', 'El usuario debe tener un email asociado').not().isEmpty(),
    check('password', 'El usuario debe introducir una contraseña').not().isEmpty(),
    validateInputs
  ],
  signup);
