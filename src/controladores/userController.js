import { User } from '../modelos/user.model.js'

export const buscarPeliculasporID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas por id',
        }
    )
}

export const buscarPeliculasporTitulo = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas por titulo',
        }
    )
}


export const obtenerFavoritos = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo listado de favoritos',
        }
    )
}


export const anadirFavorito = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'pelicula añadida a favoritos',
        }
    )
}


export const borrarFavorito = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'borrando pelicula de favoritos',
        }
    )
}
