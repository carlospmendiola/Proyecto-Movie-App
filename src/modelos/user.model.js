const { Schema, model } = require("mongoose");
const { hash } = require("bcrypt");

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    maxLength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    maxLength: 254,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
      "Debe ser un email válido"
    ]
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minLength: 8,
    maxLength: 72,
    select: false   // No mostrar las constraseñas en los resultados de consultas
  },
  rol: {
    type: String,
    required: true,
    trim: true,
    enum: ["admin", "user"],
    default: "user"
  }
}, {
  timestamps: true
});

// La siguiente función de callback no puede ser de flecha porque necesitamos poder acceder a la variable this y que esta no sea la propia función
userSchema.pre("save", async function (next) {
  // Solo efectuar el cifrado de la contraseña cuando se modificada, no hacerlo si por ejemplo solo cambia el email
  if (!this.isModified("password"))
    return;

  try {
    this.password = await hash(this.password, 10);
  } catch (error) {
    throw error; // Si hay error pasarlo al siguiente proceso de Mongoose para detener la inserción
  }
});

const User = model("users", userSchema);
module.exports = User;
