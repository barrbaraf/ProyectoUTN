import mongoose from "mongoose";


const blogSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true }, // Cambié "require" a "required"
    contenido: { type: String, required: true }, // Cambié "require" a "required"
    titulo: { type: String, required: true }, // Cambié "require" a "required"
    imagen: { type: String, required: true }, // Cambié "require" a "required"
    descripcion: { type: String, required: true }, // Cambié "require" a "required"
    fechaPublicacion: { type: Date, default: new Date() },
    isHabilitado: { type: Boolean, default: true },
  },
  { timestamps: true } // Agregado para tener las fechas de creación y actualización automáticas
);

const Blog = mongoose.model("blog", blogSchema);

export default Blog;
