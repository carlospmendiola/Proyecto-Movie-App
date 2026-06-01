import { comprobarToken } from "../utils/gestionarToken.js";

const USER = 'user';
const ADMIN = 'admin';

export const validarRolUser = (req, res, next) => {
    try {
        const rol = req.rol;
        console.log({ rol })

        //si no hay rol => mensaje de error
        if (!rol) {
            return res.status(400).json({
                ok: false,
                msg: "Rol desconocido"
            });
        }

        //existe token
        if (USER !== rol)
            res.status(403).json({
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

export const validarRolAdmin = (req, res, next) => {
    try {
        const rol = req.rol;

        //si no hay rol => mensaje de error
        if (!rol) {
            return res.status(400).json({
                ok: false,
                msg: "Rol desconocido"
            });
        }

        //existe token
        if (ADMIN !== rol)
            res.status(403).json({
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
