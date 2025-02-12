import mongoose from "mongoose";


const blogSchema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true }, // Cambié "require" a "required"
    
  },
  { timestamps: true } // Agregado para tener las fechas de creación y actualización automáticas
);

const Blog = mongoose.model("blog", blogSchema);

export default Blog;
