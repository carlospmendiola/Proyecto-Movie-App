import { Router } from "express";
import { check } from "express-validator";
import  upload from "../middlewares/uploads.js";

import {
  obtenerTodasPeliculas,
  obtenerPeliculasID,
  insertarNuevaPelicula,
  editarPeliculaID,
  borrarPeliculasID
} from "../controllers/admin.controller.js";

export const adminRoutes = Router();

//todas las pelis
adminRoutes.get("/movies", obtenerTodasPeliculas);

//pelis por ID
adminRoutes.get("/movies/:id", obtenerPeliculasID);

//nueva peli e imagen
adminRoutes.post("/movies/new", upload.single('image'), insertarNuevaPelicula);

//editar peli
adminRoutes.patch("/movies/edit", editarPeliculaID);

//borrar peli
adminRoutes.delete("/movies/:id", borrarPeliculasID);

