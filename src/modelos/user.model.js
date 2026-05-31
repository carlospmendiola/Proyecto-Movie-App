const { Schema, model } = require("mongoose");
const { genHash } = require("../utils/password");

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
  },
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: "Movie"
  }]
}, {
  timestamps: true
});

// La siguiente función de callback no puede ser de flecha porque necesitamos poder acceder a la variable this y que esta no sea la propia función
userSchema.pre("save", async function (next) {
  // Solo efectuar el cifrado de la contraseña cuando se modificada, no hacerlo si por ejemplo solo cambia el email
  if (!this.isModified("password"))
    return;

  try {
    this.password = await genHash(this.password);
  } catch (error) {
    throw error; // Si hay error pasarlo al siguiente proceso de Mongoose para detener la inserción
  }
});

// Mismo caso que el anterior pero para cuando se utilizan los métodos de findOneAndUpdate, updateOne y updateMany
userSchema.pre(['findOneAndUpdate', 'updateOne', 'updateMany'], async function () {
  const update = this.getUpdate();

  // Para cuando se actualiza directamente la contraseña: { password: '...' }
  if (update.password)
    update.password = await genHash(update.password);
  // Para cuando se actualiza através de $set: { $set: { password: '...' } }
  else if (update.$set && update.$set.password)
    update.$set.password = await genHash(update.$set.password);
});

// Se usa insertMany para insertar datos de prueba iniciales en la base de datos.
userSchema.pre("insertMany", async function (docs) {
  try {
    // // Esta forma nofunciona porque forEach no esperar a que termine de generarse el hash
    // // Iterar sobre todos los documentos para cifrar la contraseña
    // docs.forEach(async doc => {
    //   if (doc.password)
    //     doc.password = await genHash(doc.password);
    // });

    // // Evito esta forma para no usar for ... of pero funciona
    // // Iterar sobre todos los documentos para cifrar la contraseña
    // for (let doc of docs)
    //   if (doc.password)
    //     doc.password = await genHash(doc.password);

    // La única forma que se me ha ocurrido para que se espere a que el cifrado de la contraseña de cada documento termine
    // Iterar sobre todos los documentos para cifrar la contraseña
    return await Promise.all(
      docs.map(async (doc) => {
        if (doc.password)
          doc.password = await genHash(doc.password);
      })
    );
  } catch (error) {
    throw error;
  }
});

const User = model("User", userSchema, "users");
module.exports = User;
