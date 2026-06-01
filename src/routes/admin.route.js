import { Router } from "express";
import { check } from "express-validator";
import  upload from "../middlewares/uploads.js";
import { validarRolAdmin } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";

import {
  obtenerTodasPeliculas,
  obtenerPeliculasID,
  insertarNuevaPelicula,
  editarPeliculaID,
  borrarPeliculasID
} from "../controllers/admin.controller.js";



export const adminRoutes = Router();

//todas las pelis
adminRoutes.get("/movies", [validarToken, validarRolAdmin], obtenerTodasPeliculas);

//pelis por ID
adminRoutes.get("/movies/:id", [validarToken, validarRolAdmin], obtenerPeliculasID);

//nueva peli e imagen
adminRoutes.post("/movies/new", [validarToken, validarRolAdmin, upload.single('image')], insertarNuevaPelicula);

//editar peli
adminRoutes.patch("/movies/edit", [validarToken, validarRolAdmin], editarPeliculaID);

//borrar peli
adminRoutes.delete("/movies/:id", [validarToken, validarRolAdmin], borrarPeliculasID);
