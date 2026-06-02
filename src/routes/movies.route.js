import { Router } from "express";
import { query } from "express-validator"
import { validarRolUser } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";
import { validateInputs } from "../middlewares/validateInputs.js";

import {
  buscarPeliculasporID,
  buscarPeliculasporTitulo,
  obtenerFavoritos,
  obtenerPelicula,
  anadirFavorito,
  borrarFavorito
} from "../controllers/movies.controller.js";

export const moviesRoutes = Router();

//pelis por titulo
moviesRoutes.get("/search", [
  validarToken,
  validarRolUser,
  query("title", "No se especificó título por el que buscar").notEmpty(),
  query("title").customSanitizer(value => RegExp.escape(value)),
  validateInputs
], buscarPeliculasporTitulo);

//todos los favoritos
moviesRoutes.get("/favorites", [validarToken, validarRolUser], obtenerFavoritos);

//obtener pelicula por id
moviesRoutes.get("/:id", [validarToken, validarRolUser], obtenerPelicula);

//nueva peli
moviesRoutes.post("/favorites", [validarToken, validarRolUser], anadirFavorito);

//borrar peli
moviesRoutes.delete("/favorites/:id", [validarToken, validarRolUser], borrarFavorito);
