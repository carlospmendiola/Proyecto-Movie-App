import { User } from "../models/user.model.js";

export const login = (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: "logueando"
  });
};

export const signup = (req, res) => {
  return res.status(200).json({
    ok: true,
    msg: "nuevo usuario creado con exito"
  });
};
