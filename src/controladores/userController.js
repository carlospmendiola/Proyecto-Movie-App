import { User } from '../modelos/user.model.js'

const buscarPeliculasporID = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas por id',
        }
    )
}

const buscarPeliculasporTitulo = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo un peliculas por titulo',
        }
    )
}


const obtenerFavoritos = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'obteniendo listado de favoritos',
        }
    )
}


const anadirFavorito = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'pelicula añadida a favoritos',
        }
    )
}


const borrarFavorito = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'borrando pelicula de favoritos',
        }
    )
}


export {
    buscarPeliculasporID,
    buscarPeliculasporTitulo,
    obtenerFavoritos,
    anadirFavorito,
    borrarFavorito
}
