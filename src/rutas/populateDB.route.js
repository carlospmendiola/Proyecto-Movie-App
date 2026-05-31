import { Router } from "express";

import { populateDB } from "../controladores/populateDB.controller.js";

const populateDBRoutes = Router();

populateDBRoutes.get("/", populateDB);

export { populateDBRoutes };