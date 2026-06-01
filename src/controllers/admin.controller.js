import { Movie } from "../models/movie.model.js";

export const obtenerTodasPeliculas = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una peliculas",
    token: req.token
  });
};

export const obtenerPeliculasID = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una peliculas por id",
    token: req.token
  });
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

export const borrarPeliculasID = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "borrando pelicula por id",
    token: req.token
  });
};
