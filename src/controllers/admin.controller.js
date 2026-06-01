import { Movie } from "../models/movie.model.js";

export const obtenerTodasPeliculas = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una peliculas",
    token: req.Token
  });
};

export const obtenerPeliculasID = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una peliculas por id",
    token: req.Token
  });
};

export const insertarNuevaPelicula = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "peliculas creada",
    token: req.Token
  });
};

export const editarPeliculaID = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "pelicula editada",
    token: req.Token
  });
};

export const borrarPeliculasID = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "borrando pelicula por id",
    token: req.Token
  });
};
