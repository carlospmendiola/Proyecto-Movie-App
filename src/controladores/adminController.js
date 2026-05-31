import { Movie } from '../modelos/movie.model.js'

export const obtenerTodasPeliculas = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas',
        }
    )
}


export const obtenerPeliculasID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas por id',
        }
    )
}


export const insertarNuevaPelicula = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'peliculas creada',
        }
    )
}


export const editarPeliculaID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'pelicula editada',
        }
    )
}


export const borrarPeliculasID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'borrando pelicula por id',
        }
    )
}
