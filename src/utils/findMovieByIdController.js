import { Movie } from "../models/movie.model.js";

export const findMoviebyIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);

    if (!movie)
      return res.status(404).json({
        ok: false,
        msg: "No se encontró la película",
        token: req.token
      });

    return res.status(200).json({
      ok: true,
      msg: movie,
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
