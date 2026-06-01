import { Router } from "express";
import { check } from "express-validator";

import { login, signup } from "../controllers/auth.controller.js";
import { validateInputs } from "../middlewares/validateInputs.js";

export const authRoutes = Router();

authRoutes.post("/login", login);

authRoutes.post("/signup", signup);
