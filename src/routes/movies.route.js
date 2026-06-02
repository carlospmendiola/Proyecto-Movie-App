import { Router } from "express";
import { param, query } from "express-validator"
import { isValidObjectId } from "mongoose";

import { validarRol } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";
import { validateInputs } from "../middlewares/validateInputs.js";

import {
  buscarPeliculasporTitulo,
  obtenerFavoritos,
  obtenerPelicula,
  anadirFavorito,
  borrarFavorito,
  traerDeFuera
} from "../controllers/movies.controller.js";

export const moviesRoutes = Router();

//pelis por titulo
moviesRoutes.get("/search", [
  validarToken,
  validarRol(["user"]),
  query("title", "No se especificó título por el que buscar").notEmpty(),
  query("title").customSanitizer(value => RegExp.escape(value)),
  validateInputs
], buscarPeliculasporTitulo);

//todos los favoritos
moviesRoutes.get("/favorites", [validarToken, validarRol(["user"])], obtenerFavoritos);

//obtener pelicula por id
moviesRoutes.get("/:id", [
  validarToken,
  validarRol(["user"]),
  param("id", "El id de película no es válido").custom(value => isValidObjectId(value)),
  validateInputs
], obtenerPelicula);

//nueva peli afavoritos
moviesRoutes.post("/favorites", [validarToken, validarRol(["user"])], anadirFavorito);

//borrar peli
moviesRoutes.delete("/favorites/:id", [
  validarToken,
  validarRol(["user"]),
  param("id", "El id de película no es válido").custom(value => isValidObjectId(value)),
  validateInputs
], borrarFavorito);
