import { User } from "../models/user.model.js";
import { generarToken } from "../utils/gestionarToken.js";

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("name email rol password");

    if (!user)
      return res.status(404).json({
        ok: false,
        msg: "Usuario inexistente"
      });

    if (!await user.comparePassword(password))
      return res.status(401).json({
        ok: false,
        msg: "Contraseña incorrecta"
      });

    const token = await generarToken({ id: user._id, rol: user.rol });

    res.status(200).json({
      ok: true,
      msg: "Sesión iniciada",
      user: {
        user: user.name,
        email: user.email,
        rol: user.rol
      },
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
      msg: "Nuevo usuario registrado",
      user: {
        name,
        email,
        rol
      },
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
