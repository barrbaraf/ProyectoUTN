import mongoose from "mongoose";

const AutorSchema = new mongoose.Schema(
  {
    id: { type: String, require: true, unique: true }, // Cambié "require" a "required"
    nombre:{ type: String, require: true},
    biografia:{ type: String, require: true},
    fechaNacimiento:{ type: String, require: true},
    redSocial:{ type: String, require: true},
    fotoPerfil:{ type: String, require: false},
    isHabilitado:{ type: Boolean, default: true}
  });

const Autor = mongoose.model("Autor", AutorSchema);

export default Autor;
