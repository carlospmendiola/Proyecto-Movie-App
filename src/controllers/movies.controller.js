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
    const id = req.id;
    const usuario = await User.findById(id).select("favorites").populate("favorites");

    if (!usuario?.favorites?.length)
      return res.status(404).json({
        ok: false,
        msg: "No se encontraron películas en favoritos",
        token: req.token
      });

    return res.status(200).json({
      ok: true,
      msg: usuario.favorites,
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

export const obtenerPelicula = (req, res) => {
  findMoviebyIdController(req, res);
};

export const anadirFavorito = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "pelicula añadida a favoritos",
    token: req.token
  });
};

export const borrarFavorito = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "borrando pelicula de favoritos",
    token: req.token
  });
};

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

  const url = "http://www.omdbapi.com/?apikey=" + key + "&s=" + title + "&plot=full"
  const response = await fetch(url)
  const pelicula = await response.json()
}