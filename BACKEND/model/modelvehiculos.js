import mongoose from "mongoose";


const vehiculoSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  matricula: { type: String, required: true },
  color: { type: String, required: true },
  ishabilitado: { type: Boolean, required: true },
});
const Vehiculo = mongoose.model("Vehiculo", vehiculoSchema);
export default Vehiculo;
