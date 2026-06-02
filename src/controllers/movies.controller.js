import { User } from "../models/user.model.js";
import { Movie } from "../models/movie.model.js";

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
  console.log("nuevo token: ", req.Token)
  return res.status(200).json({
    ok: true,
    msg: "obteniendo listado de favoritos",
    token: req.Token
  });
};

export const anadirFavorito = async (req, res) => {
  try {
    const { movieId } = req.body;
    const pelicula = await Movie.findById(movieId);
    if (!pelicula) {
      return res.status(404).json({
        ok: false,
        msg: "Película no encontrada"
      });
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
    const { id } = req.params;
    const usuario = await User.findById(req.id);
    if (!usuario) {
      return res.status(404).json({
        ok: false,
        msg: "Usuario no encontrado"
      });
    }
    usuario.favorites = usuario.favorites.filter(
      fav => fav.toString() !== id
    );
    await usuario.save();
    return res.status(200).json({
      ok: true,
      msg: "Película eliminada de favoritos"
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      msg: error.message
    });
  }
};
