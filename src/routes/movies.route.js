import { Router } from "express";
import { check } from "express-validator"
import { validarRol } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";

import {
  buscarPeliculasporID,
  buscarPeliculasporTitulo,
  obtenerFavoritos,
  obtenerPelicula,
  anadirFavorito,
  borrarFavorito,
  traerDeFuera
} from "../controllers/movies.controller.js";

const ADMIN = process.env.ADMIN
const USER = process.env.USER

export const moviesRoutes = Router();

//pelis por titulo
moviesRoutes.get("/search", [validarToken, validarRol([USER])], buscarPeliculasporTitulo);

//todos los favoritos
moviesRoutes.get("/favorites", [validarToken, validarRol([USER])], obtenerFavoritos);

//obtener pelicula por id
moviesRoutes.get("/:id", [validarToken, validarRol([USER])], obtenerPelicula);

//nueva peli
moviesRoutes.post("/favorites", [validarToken, validarRol([USER])], anadirFavorito);

//borrar peli
moviesRoutes.delete("/favorites/:id", [validarToken, validarRol([USER])], borrarFavorito);
