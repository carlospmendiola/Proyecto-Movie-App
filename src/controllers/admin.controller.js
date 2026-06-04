import { Movie } from "../models/movie.model.js";
import { User } from "../models/user.model.js";
import { findMoviebyIdController } from "../utils/findMovieByIdController.js";

export const obtenerTodasPeliculas = async (req, res) => {
  try {
    const movies = await Movie.find();

    if (!movies?.length)
      return res.status(404).json({
        ok: false,
        msg: "No se encontraron películas",
        token: req.token
      });

    res.status(200).json({
      ok: true,
      msg: `${movies.length} películas encontradas`,
      movies,
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

export const obtenerPeliculasID = async (req, res) => {
  findMoviebyIdController(req, res);
};

export const insertarNuevaPelicula = async (req, res) => {
  try {
    const { title, synopsis, year, director, genres, duration, externalId } = req.body;
    const imagePath = req.file ? req.file.path : null;

    const newMovie = new Movie({
      title,
      synopsis,
      year,
      director,
      genres,
      duration,
      externalId,
      image: imagePath
    });

    await newMovie.save();

    res.status(201).json({
      ok: true,
      msg: "Película creada",
      movie: newMovie,
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

export const editarPeliculaID = async (req, res) => {
  try {
    const { title, synopsis, year, director, genres, duration, externalId } = req.body
    const imagePath = req.file ? req.file.path : null;
    const movieId = req.params.id;

    const movieActualizada = await Movie.findByIdAndUpdate(movieId,
      { title, synopsis, year, director, genres, duration, externalId, image: imagePath },
      { returnDocument: "after" }  // devuelve el documento ya actualizado
    );

    if (!movieActualizada)
      return res.status(404).json({
        ok: false,
        msg: "No se encontró la película a actualizar",
        token: req.token
      });

    res.status(200).json({
      ok: true,
      msg: "pelicula editada",
      movie: movieActualizada,
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

export const borrarPeliculasID = async (req, res) => {
  try {
    const { id } = req.params;

    const pelicula = await Movie.findByIdAndDelete(id);

    if (!pelicula) {
      return res.status(404).json({
        ok: false,
        msg: "Película no encontrada",
        token: req.token
      });
    }

    // Borrar la película de las listas de favoritos, no es necesario esperar a su finalización
    User.updateMany(
      { favorites: id },
      { $pull: { favorites: id } }
    );

    res.status(200).json({
      ok: true,
      msg: "Película borrada",
      movie: pelicula,
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
