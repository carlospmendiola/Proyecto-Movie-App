import { Router } from "express";

import { populateDB } from "../controllers/populateDB.controller.js";

export const populateDBRoutes = Router();

populateDBRoutes.get("/", populateDB);
