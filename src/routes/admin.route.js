import { Router } from "express";
import { check } from "express-validator";
import { validarRolAdmin } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";
import { validateInputs } from "../middlewares/validateInputs.js";

import {
  obtenerTodasPeliculas,
  obtenerPeliculasID,
  insertarNuevaPelicula,
  editarPeliculaID,
  borrarPeliculasID
} from "../controllers/admin.controller.js";

export const adminRoutes = Router();

//todas las pelis
adminRoutes.get("/movies", [
  validarToken,
  validarRolAdmin
], obtenerTodasPeliculas);

//pelis por ID
adminRoutes.get("/movies/:id", [validarToken, validarRolAdmin], obtenerPeliculasID);

//nueva peli
adminRoutes.post("/movies/new", [
  check('title', 'El titulo es obligatorio').not().isEmpty(),
  check('synopsis', '').optional().not().isEmpty(),
  check('year', '').optional().not().isEmpty(),
  check('director', '').optional().not().isEmpty(),
  check('genres', '').optional().not().isEmpty(),
  check('duration', '').optional().not().isEmpty(),
  check('externalId', '').optional().not().isEmpty(),
  validateInputs,
  validarToken,
  validarRolAdmin],
  insertarNuevaPelicula);

//editar peli
adminRoutes.patch("/movies/edit/:id",
  [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('synopsis', '').optional().not().isEmpty(),
    check('year', '').optional().not().isEmpty(),
    check('director', '').optional().not().isEmpty(),
    check('genres', '').optional().not().isEmpty(),
    check('duration', '').optional().not().isEmpty(),
    check('externalId', '').optional().not().isEmpty(),
    validateInputs,
    validarToken,
    validarRolAdmin
  ],
  editarPeliculaID);

//borrar peli
adminRoutes.delete("/movies/:id", [validarToken, validarRolAdmin], borrarPeliculasID);
