import { User } from "../models/user.model.js";
import { generarToken } from "../utils/gestionarToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuario = await User.findOne({ email }).select("password rol");
    if (!usuario)
      return res.status(404).json({
        ok: false,
        msg: "Usuario inexistente"
      });

    if (!await usuario.comparePassword(password))
      return res.status(401).json({
        ok: false,
        msg: "Contraseña incorrecta"
      });

    const token = await generarToken({ id: usuario._id, rol: usuario.rol });

    res.status(200).json({
      ok: true,
      token
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Error interno del servidor"
    });
  }
};

export const signup = (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: "nuevo usuario creado con exito"
  });
};
