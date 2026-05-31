import pkg from 'express';
const express = pkg;

import { check } from 'express-validator'
import {
    buscarPeliculasporID,
    buscarPeliculasporTitulo,
    obtenerFavoritos,
    anadirFavorito,
    borrarFavorito
} from '../controladores/userController.js'

const usersRoutes = express.Router()

//pelis por ID
usersRoutes.get('/movies/:id', buscarPeliculasporID)

//pelis por titulo
usersRoutes.get('/movies/:titulo', buscarPeliculasporTitulo)


//todos los favoritos
usersRoutes.get('/favs', obtenerFavoritos)

//nueva peli
usersRoutes.post('/favs/add/:id', anadirFavorito)

//borrar peli
usersRoutes.delete('/favs/del/:id', borrarFavorito)


export { usersRoutes }