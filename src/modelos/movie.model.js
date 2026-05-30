const { Schema, model } = require("mongoose");

const movieSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: true,
    maxLength: 255
  },
  synopsis: {
    type: String,
    trim: true,
    maxLength: 2000
  },
  year: {
    type: Number,
    min: 1888, // La primera película de la historia fue en 1888, Roundhay Garden Scene
    max: 9999
  },
  director: {
    type: String,
    trim: true,
    maxlength: 100
  },
  genres: [{
    type: String,
    trim: true,
    enum: [
      'Acción', 'Aventura', 'Animación', 'Comedia', 'Crimen',
      'Documental', 'Drama', 'Familiar', 'Fantasía', 'Historia',
      'Terror', 'Música', 'Misterio', 'Romance', 'Ciencia ficción',
      'Película de TV', 'Suspense', 'Guerra', 'Western'
    ]
  }],
  duration: {
    type: Number,
    min: 1,
    max: 1000,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} debe ser en minutos'
    }
  },
  externalId: {
    type: String,
    trim: true,
    maxLength: 12
  }
}, {
  timestamps: true
});

module.exports = model("movies", movieSchema);
