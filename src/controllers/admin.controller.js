import { Movie } from "../models/movie.model.js";

export const obtenerTodasPeliculas = async (req, res) => {
  try {
    const movies = await Movie.find();

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

export const obtenerPeliculasID = async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await Movie.findById(id);

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

export const insertarNuevaPelicula = async (req, res) => {
  try {
    const { title, synopsis, year, director, genres, duration, externalId } = req.body
    const imagePath = req.file ? req.file.path : null
    const newMovie = new Movie({
      title,
      synopsis,
      year,
      director,
      genres,
      duration,
      externalId,
      image: imagePath
    })
    await newMovie.save()
    return res.status(201).json({
      ok: true,
      msg: "Recurso creado"
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      ok: false,
      msg: error.message
    })
  }
}

export const editarPeliculaID = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "pelicula editada",
    token: req.token
  });
};

export const borrarPeliculasID = async (req, res) => {
  try {
    const { id } = req.params;

    const pelicula = await Movie.findByIdAndDelete(id);

    console.log("PELÍCULA BORRADA:", pelicula);

    if (!pelicula) {
      return res.status(404).json({
        ok: false,
        msg: "Película no encontrada",
        token: req.token
      });
    }

    return res.status(200).json({
      ok: true,
      msg: "Película borrada",
      pelicula,
      token: req.token
    });

  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: "Error interno del servidor",
      token: req.token,
      error: error.message
    });
  }
};
