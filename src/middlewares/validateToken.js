import { comprobarToken } from "../utils/gestionarTokens.js";

export const validarToken = (req, res, next) => {
  try {
    const token = req.header("Authorization").split(" ")[1] || "";

    //si no hay token => mensaje de error
    if (!token) {
      return res.status(400).json({
        ok: false,
        msg: "Token no enviado"
      });
    }

    //existe token
    const resultado = comprobarToken(token);
    req.id = resultado.id;
    next();
  } catch (error) {
    res.status(400).json({
      ok: true,
      msg: "Error en el token"
    });
  }
};
