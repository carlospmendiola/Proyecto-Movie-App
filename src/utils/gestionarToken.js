import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.SECRET_KEY;

//Generar token
const generarToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload,
            SECRET_KEY,
            { expiresIn: '1h' },
            (error, token) => {
                if (error) {
                    console.log(error)
                    return reject(`Error al generar el token:\n${error}`)
                }
                resolve(token)
            }
        )
    })
}

//Comprobar token
const comprobarToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    generarToken,
    comprobarToken
}