import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

export default Usuario; // Aquí exportamos como default
