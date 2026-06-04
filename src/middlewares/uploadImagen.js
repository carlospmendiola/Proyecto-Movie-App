import upload from '../utils/uploads.js'

export const uploadImage = (req, res, next) => {
    upload.single('image')(req, res, (err) => {
        if (err) {
            console.error('Error en subida de imagen (Multer/Cloudinary):', err)

            return res.status(500).json({
                ok: false,
                msg: err.message || 'Error al subir la imagen'
            })
        }

        next()
    })
}

export const requireImage = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({
            ok: false,
            msg: 'La imagen es obligatoria'
        });
    }

    next();
};