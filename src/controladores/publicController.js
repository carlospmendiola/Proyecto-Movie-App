import { User } from '../modelos/user.model.js'

export const loguear = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'logueando',
        }
    )
}


export const registrar = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'nuevo usuario creado con exito',
        }
    )
}
