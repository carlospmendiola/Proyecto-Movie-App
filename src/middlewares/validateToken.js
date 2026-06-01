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

    const nuevoToken = await generarToken(resultado);

    req.Token = nuevoToken
    console.log({ nuevoToken })

    next();

  } catch (error) {
    return res.status(401).json({
      ok: false,
      msg: error.message || "Error en el token"
    });
  }
};