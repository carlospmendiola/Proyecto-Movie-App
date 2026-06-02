import { User } from "../models/user.model.js";
import { Movie } from "../models/movie.model.js";

export const buscarPeliculasporID = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una pelicula por id",
    token: req.token
  });
};

export const buscarPeliculasporTitulo = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una pelicula por titulo",
    token: req.token
  });
};

export const obtenerFavoritos = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo listado de favoritos",
    token: req.token
  });
};

export const obtenerPelicula = (req, res) => {
  console.log("nuevo token: ", req.token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo listado de favoritos",
    token: req.token
  });
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
  const { title } = req.query
  console.log(`Buscando ${title}`)
  const key = process.env.OMDB_KEY
  const url = "http://www.omdbapi.com/?apikey=" + key + "&t=" + title + "&plot=full"
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
  await newMovie.save()

  return res.status(200).json({
    ok: true,
    msg: "Encontrada pelicula fuera",
    pelicula,
    token: req.token
  });
};