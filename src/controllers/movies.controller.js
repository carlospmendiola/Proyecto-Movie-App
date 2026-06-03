import { User } from "../models/user.model.js";
import { matchedData } from "express-validator";
import { Movie } from "../models/movie.model.js";
import { findMoviebyIdController } from "../utils/findMovieByIdController.js";

export const buscarPeliculasporTitulo = async (req, res) => {
  try {
    const { title } = matchedData(req);
    // Al usar una variable en una regex hay que generar un nuevo objeto de RegExp, no se puede directamente.
    const movies = await Movie.find({ title: new RegExp(title, "i") });

    if (!movies?.length)
      return traerDeFuera(req, res)

    return res.status(200).json({
      ok: true,
      msg: movies,
      token: req.token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};

export const obtenerFavoritos = async (req, res) => {
  try {

    const usuario = await User.findById(req.id).populate("favorites");
    if (!usuario) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado"
      });
    }
    return res.status(200).json({
      ok: true,
      favorites: usuario.favorites
    });
  } catch (error) {

    return res.status(500).json({
      ok: false,
      msg: error.message
    });
  }
};

export const obtenerPelicula = (req, res) => {
  findMoviebyIdController(req, res);
};

export const anadirFavorito = async (req, res) => {
  try {
    const { movieId } = req.body;

    const pelicula = await Movie.findById(movieId);
    if (!pelicula) {
      return guardarDeFuera(req, res)
    }
    const usuario = await User.findById(req.id);
    if (!usuario) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado"
      });
    }
    if (usuario.favorites.includes(movieId)) {
      return res.status(409).json({
        ok: false,
        msg: "La película ya está en favoritos"
      });
    }
    usuario.favorites.push(movieId);
    await usuario.save();
    return res.status(200).json({
      ok: true,
      msg: "Película añadida a favoritos"
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: error.message
    });
  }
};
  


export const borrarFavorito = async (req, res) => {
  try {
    const userId = req.id;
    const resultado = await User.updateOne(
      { _id: userId, favorites: movieId },
      { $pull: { favorites: movieId } }
    );

    if (!resultado.modifiedCount)
      return res.status(404).json({
        ok: false,
        msg: "La película a borrar no existe en favoritos",
        token: req.token
      });

    return res.status(200).json({
      ok: true,
      msg: "Favorito eliminado",
      token: req.token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
}

export const traerDeFuera = async (req, res) => {
  try {
    const title = req.query.title
    console.log(`Buscando ${title}`)
    const key = process.env.OMDB_KEY
    const url = "http://www.omdbapi.com/?apikey=" + key + "&s=" + title + "&plot=full"
    const response = await fetch(url)
    const pelicula = await response.json()

    const newMovie = new Movie({
      title: pelicula.Title,
      synopsis: pelicula.Plot,
      year: Number(pelicula.Year),
      director: pelicula.Director,
      genres: pelicula.Genre,
      duration: Number(pelicula.Runtime.split(' ')[0]),
      externalId: "OMDB",
      image: pelicula.Poster
    })

    //newMovie.save()

    return res.status(200).json({
      ok: true,
      msg: "Encontrada pelicula fuera",
      pelicula,
      token: req.token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
}

export const guardarDeFuera = async (req, res) => {
  try {
    const { id } = req.body;
    const key = process.env.OMDB_KEY
    const url = "http://www.omdbapi.com/?apikey=" + key + "&i=" + id
    const response = await fetch(url)
    const pelicula = await response.json()

    const newMovie = new Movie({
      title: pelicula.Title,
      synopsis: pelicula.Plot,
      year: Number(pelicula.Year),
      director: pelicula.Director,
      genres: pelicula.Genre,
      duration: Number(pelicula.Runtime.split(' ')[0]),
      externalId: pelicula.imdbID,
      image: pelicula.Poster
    })

    const resultado = await newMovie.save()

    if (!resultado) {
      return res.status(400).json({
        ok: false,
        msg: "Error guardando pelicula externa",
        token: req.token
      });
    }

    return res.status(200).json({
      ok: true,
      msg: "Guardada pelicula fuera",
      pelicula,
      token: req.token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
}