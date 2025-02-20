import mongoose from "mongoose";

const vehiculoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  marca: { type: String, required: true },
  color: { type: String, required: true },
  imagen: { type: String, required: false },
  fechaPublicacion: { type: Date, default: new Date() },
  autor: { type: mongoose.Schema.Types.ObjectId, ref: "Autor", required: true },
  descripcion: { type: String, required: true },
  ishabilitado: { type: Boolean, required: true },
});
const Vehiculo = mongoose.model("Vehiculo", vehiculoSchema);
export default Vehiculo;
