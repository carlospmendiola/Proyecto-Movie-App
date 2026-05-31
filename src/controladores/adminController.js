import { Movie } from '../modelos/movie.model.js'

const obtenerTodasPeliculas = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas',
        }
    )
}


const obtenerPeliculasID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas por id',
        }
    )
}


const insertarNuevaPelicula = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'peliculas creada',
        }
    )
}


const editarPeliculaID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'pelicula editada',
        }
    )
}


const borrarPeliculasID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'borrando pelicula por id',
        }
    )
}


export {
    obtenerPeliculasID,
    obtenerTodasPeliculas,
    insertarNuevaPelicula,
    editarPeliculaID,
    borrarPeliculasID
}
