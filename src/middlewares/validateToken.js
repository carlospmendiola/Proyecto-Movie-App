import { comprobarToken, generarToken } from "../utils/gestionarToken.js";

export const validarToken = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        ok: false,
        msg: "Token no enviado"
      });
    }

    const resultado = await comprobarToken(token);

    req.id = resultado.id;
    req.rol = resultado.rol;

    const nuevoToken = await generarToken({ id: resultado.id, rol: resultado.rol });

    req.token = nuevoToken

    next();

  } catch (error) {
    console.log(error);
    return res.status(401).json({
      ok: false,
      msg: error.message || "Error en el token"
    });
  }
};
