import { Router } from "express";
import { param, query, body } from "express-validator";
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

//Buscar películas por título
moviesRoutes.get("/search",
  [
    validarToken,
    validarRol(["user"]),
    query("title", "No se especificó título por el que buscar").notEmpty(),
    query("title").customSanitizer(value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')),
    validateInputs
  ],
  buscarPeliculasporTitulo
);

//Obtener favoritos del usuario (userId viene del token)
moviesRoutes.get("/favorites",
  [
    validarToken,
    validarRol(["user"])
  ],
  obtenerFavoritos
);

//Obtener película por ID
moviesRoutes.get("/:id",
  [
    validarToken,
    validarRol(["user"]),
    param("id", "El id no tiene el formato correcto").custom(value => isValidObjectId(value)),
    validateInputs
  ],
  obtenerPelicula
);

//Añadir película a favoritos
moviesRoutes.post("/favorites",
  [
    validarToken,
    validarRol(["user"]),
    body("movieId", "El id no tiene el formato correcto").custom(value => isValidObjectId(value) || /^tt\d{7,10}$/.test(value)
    ),
    validateInputs
  ],
  anadirFavorito
);

//Borrar película de favoritos
moviesRoutes.delete("/favorites/:id",
  [
    validarToken,
    validarRol(["user"]),
    param("id", "El id no tiene el formato correcto").custom(value => isValidObjectId(value)),
    validateInputs
  ],
  borrarFavorito
);