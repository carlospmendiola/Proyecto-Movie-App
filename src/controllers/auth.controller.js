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

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (await User.exists({ email }))
      return res.status(409).json({
        ok: false,
        msg: "Email ya registrado. Utiliza recordar contraseña si la has olvidado."
      });

    const { _id: id, rol } = await new User({ name, email, password }).save();

    const token = await generarToken({ id, rol });

    res.status(201).json({
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
