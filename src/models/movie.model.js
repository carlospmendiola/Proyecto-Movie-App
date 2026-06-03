import { Schema, model } from "mongoose";

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 255
  },
  image: {
    type: String,
    trim: true
  },
  synopsis: {
    type: String,
    required: true,
    trim: true,
    maxLength: 2000
  },
  year: {
    type: Number,
    required: true,
    min: 1888, // La primera película de la historia fue en 1888, Roundhay Garden Scene
    max: 9999
  },
  director: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  genres: [{
    type: String,
    required: true,
    trim: true
  }],
  duration: {
    type: Number,
    required: true,
    min: 1,
    max: 1000,
    validate: {
      validator: Number.isInteger,
      message: "{VALUE} debe ser en minutos"
    }
  },
  externalId: {
    type: String,
    trim: true,
    maxLength: 12
  }
}, {
  timestamps: true,
  versionKey: "version"
});

export const Movie = model("Movie", movieSchema, "movies");
