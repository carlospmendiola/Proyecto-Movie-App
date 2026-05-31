import { Router } from "express";

import { populateDB } from "../controladores/populateDB.controller.js";

export const populateDBRoutes = Router();

populateDBRoutes.get("/", populateDB);
