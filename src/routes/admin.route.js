import { Router } from "express";
import { body, check, param } from "express-validator";
import { requireImage, uploadImage } from "../middlewares/uploadImagen.js";
import { validarRol } from "../middlewares/validarRol.js";
import { validarToken } from "../middlewares/validateToken.js";
import { validateInputs } from "../middlewares/validateInputs.js";
import mongoose from "mongoose";

import {
  obtenerTodasPeliculas,
  obtenerPeliculasID,
  insertarNuevaPelicula,
  editarPeliculaID,
  borrarPeliculasID,

} from "../controllers/admin.controller.js";

export const adminRoutes = Router();

//todas las pelis
adminRoutes.get("/movies",
  [
    validarToken,
    validarRol(["admin"])
  ]
  , obtenerTodasPeliculas);

//pelis por ID
adminRoutes.get("/movies/:id",
  [
    validarToken,
    validarRol(["admin"]),
    param('id', 'El id no tiene el formato correcto').custom(value => mongoose.isValidObjectId(value))
  ],
  obtenerPeliculasID);

//nueva peli
adminRoutes.post('/movies',
  [
    validarToken,
    validarRol(['admin']),
    uploadImage,
    requireImage,
    body('title', 'El titulo es obligatorio').notEmpty(),
    body('synopsis', 'La sinopsis es obligatoria').notEmpty(),
    body('director', 'El director es obligatorio').notEmpty(),
    body('genres', 'Los géneros son obligatorios').notEmpty(),
    body('year').notEmpty().isInt({ min: 1888, max: 2026 }).withMessage('Año inválido'),
    body('duration', 'Duración inválida').notEmpty().isInt({ min: 1 }),
    validateInputs,
  ],
  insertarNuevaPelicula
);

// Editar una película existente por su ID
// Requiere: token JWT válido, rol de administrador y opcionalmente una nueva imagen
adminRoutes.patch("/movies/:id",
  [
    validarToken,
    validarRol(["admin"]),
    uploadImage,
    body('title').optional().trim().notEmpty(),
    body('synopsis').optional().trim().notEmpty(),
    body('director').optional().trim().notEmpty(),
    body('genres').optional().notEmpty(),
    body('year').optional().isInt({ min: 1888, max: 2026 }).withMessage('Año inválido'),
    body('duration', 'Duración inválida').optional().isInt({ min: 1 }),
    body('externalId', 'Formato de id externo incorrecto').optional().custom(value => /^tt\d{7,10}$/.test(value)),
    validateInputs
  ],
  editarPeliculaID
);

//borrar peli
adminRoutes.delete("/movies/:id",
  [
    validarToken,
    validarRol(["admin"]),
    param('id', 'El id no tiene el formato correcto').custom(value => mongoose.isValidObjectId(value))
  ],
  borrarPeliculasID);
