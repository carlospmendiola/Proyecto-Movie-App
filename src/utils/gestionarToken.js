import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
import { promisify } from "node:util";

const signAsync = promisify(sign);

const SECRET_KEY = process.env.TOKEN_SECRET_KEY;

//Generar token
export const generarToken = async (payload) => {
  return signAsync(payload, SECRET_KEY, { expiresIn: "1h", "algorithm": "HS512" });
};

//Comprobar token
export const comprobarToken = async (token) => {
  try {
    return await verify(token, SECRET_KEY)
  } catch (error) {
    throw error;
  }
};
