import multer from 'multer'
import cloudinary from 'cloudinary'
import { CloudinaryStorage } from 'multer - storage - cloudinary'

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'movie- app',
    allowed_formats: ['jpg', 'jpeg', 'png', 'gif']
  }
})

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }
})

export default upload