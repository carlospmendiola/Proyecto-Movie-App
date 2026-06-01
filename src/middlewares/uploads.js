// Importamos multer, librería para gestionar la subida de archivos
import multer from 'multer'
import path from 'path'


// Configuramos dónde y cómo se guardan los archivos en el disco
const storage = multer.diskStorage({
  destination: 'src/public/uploads/',
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname)
  }
})

// Creamos la instancia de Multer con tres configuraciones
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB máximo
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true)
    } else {
      cb(new Error('Solo se permiten imágenes'))
    }
  }
})

export default upload