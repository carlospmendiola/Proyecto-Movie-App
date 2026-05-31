import { sign, verify } from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY;

//Generar token
export const generarToken = (payload) => {
  return new Promise((resolve, reject) => {
    sign(payload, SECRET_KEY, { expiresIn: "1h" }, (error, token) => {
      if (error) {
        console.log(error);
        return reject(`Error al generar el token:\n${error}`);
      }
      resolve(token);
    });
  });
};

//Comprobar token
export const comprobarToken = (token) => {
  try {
    return verify(token, SECRET_KEY);
  } catch (error) {
    throw error;
  }
};
