import { Router } from 'express';
import { check } from 'express-validator'

import {
    obtenerTodasPeliculas,
    obtenerPeliculasID,
    insertarNuevaPelicula,
    editarPeliculaID,
    borrarPeliculasID
} from '../controladores/adminController.js'

export const adminRoutes = Router()

//todas las pelis
adminRoutes.get('/movies', obtenerTodasPeliculas)

//pelis por ID
adminRoutes.get('/movies/:id', obtenerPeliculasID)

//nueva peli
adminRoutes.post('/movies/new', insertarNuevaPelicula)

//editar peli
adminRoutes.patch('/movies/edit', editarPeliculaID)

//borrar peli
adminRoutes.delete('/movies/:id', borrarPeliculasID)
