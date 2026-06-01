import { Router } from "express";
import { check } from "express-validator"
import { validarRolUser } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";

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
moviesRoutes.get("/search", [validarToken, validarRolUser], buscarPeliculasporTitulo);

//todos los favoritos
moviesRoutes.get("/favorites", [validarToken, validarRolUser], obtenerFavoritos);

//obtener pelicula por id
moviesRoutes.get("/:id", [validarToken, validarRolUser], obtenerPelicula);

//nueva peli
moviesRoutes.post("/favorites", [validarToken, validarRolUser], anadirFavorito);

//borrar peli
moviesRoutes.delete("/favorites/:id", [validarToken, validarRolUser], borrarFavorito);
