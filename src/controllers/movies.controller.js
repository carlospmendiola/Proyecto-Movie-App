import { User } from "../models/user.model.js";

export const buscarPeliculasporID = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una pelicula por id",
    token: req.Token
  });
};

export const buscarPeliculasporTitulo = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo una pelicula por titulo",
    token: req.Token
  });
};

export const obtenerFavoritos = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo listado de favoritos",
    token: req.Token
  });
};

export const obtenerPelicula = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo listado de favoritos",
    token: req.Token
  });
};

export const anadirFavorito = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "pelicula añadida a favoritos",
    token: req.Token
  });
};

export const borrarFavorito = (req, res) => {
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "borrando pelicula de favoritos",
    token: req.Token
  });
};
