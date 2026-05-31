import { User } from '../modelos/user.model.js'

const loguear = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'logueando',
        }
    )
}


const registrar = (req, res) => {
    return res.status(200).json(
        {
            ok: true,
            msg: 'nuevo usuario creado con exito',
        }
    )
}


export { loguear, registrar };