import { Router } from "express";
import { check } from "express-validator"
import { validarRolUser } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";

import {
  buscarPeliculasporID,
  buscarPeliculasporTitulo,
  obtenerFavoritos,
  anadirFavorito,
  borrarFavorito
} from "../controllers/user.controller.js";

export const usersRoutes = Router();

//pelis por titulo
usersRoutes.get("/movies/:titulo", [validarToken, validarRolUser], buscarPeliculasporTitulo);

//todos los favoritos
usersRoutes.get("/favs", [validarToken, validarRolUser], obtenerFavoritos);

//nueva peli
usersRoutes.post("/favs/add/:id", [validarToken, validarRolUser], anadirFavorito);

//borrar peli
usersRoutes.delete("/favs/del/:id", [validarToken, validarRolUser], borrarFavorito);
