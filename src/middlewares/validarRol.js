import { comprobarToken } from "../utils/gestionarToken.js";

export const validarRol = (validRol) => (req, res, next) => {
    try {
        const rol = req.rol;
        console.log({ validRol })
        console.log({ rol })
        //si no hay rol => mensaje de error
        if (!rol) {
            return res.status(400).json({
                ok: false,
                msg: "Rol desconocido"
            });
        }

        //existe token
        if (!validRol.includes(rol))
            return res.status(403).json({
                ok: true,
                msg: "Acceso prohibido"
            });

        next();
    } catch (error) {
        res.status(400).json({
            ok: true,
            msg: "Error en el rol"
        });
    }
};
