import { Router } from "express";
import { body } from "express-validator";
import { login, signup } from "../controllers/auth.controller.js";
import { validateInputs } from "../middlewares/validateInputs.js";

export const authRoutes = Router();

//LOGIN
authRoutes.post("/login",
  [
    body('email')
      .notEmpty().withMessage('El email es obligatorio')
      .isEmail().withMessage('Formato de email inválido')
      .normalizeEmail()
      .isLength({ max: 100 }),

    body('password')
      .notEmpty().withMessage('La contraseña es obligatoria'),

    validateInputs
  ],
  login
);

//SIGNUP
authRoutes.post("/signup",
  [
    body('name')
      .notEmpty().withMessage('El usuario debe tener un alias asociado')
      .trim()
      .isLength({ min: 3, max: 30 }),

    body('email')
      .notEmpty().withMessage('El email es obligatorio')
      .isEmail().withMessage('Formato de email inválido')
      .normalizeEmail()
      .isLength({ max: 100 }),

    body('password')
      .notEmpty().withMessage('La contraseña es obligatoria')
      .isLength({ min: 8, max: 72 }).withMessage('Debe tener entre 8 y 72 caracteres')
      .isStrongPassword('La contraseña debe tener una letra, numero y carácter especial')
      .trim(),
    validateInputs
  ],
  signup
);