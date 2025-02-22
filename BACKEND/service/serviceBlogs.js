import Blog from "../model/modelBlog.js";
import crypto from "crypto";

export const getBlogs = async () => {
  const blogs = await Blog.find({ isHabilitado: true });
  return blogs;
};

export const getBlogsPaginado = async (offset, limit, page) => {
  const blogs = await Blog.find().skip(offset).limit(limit);
  const totalblogs = await Blog.countDocuments();
  const resultado = {
    blogs: blogs,
    paginaActual: page,
    totalblogs: totalblogs,
    totalPaginas: Math.ceil(totalblogs / limit),
  };
  return resultado;
};

export const getBlog = async (id) => {
  const blog = await Blog.findOne({ id: id });
  return blog;
};
export const getBlogPopulate = async (id) => {
  const blog = await Blog.findOne({ id: id }).populate("autor");
  return blog;
};
export const createBlog = async (
  contenido,
  titulo,
  imagen,
  autor,
  descripcion
) => {
  const datosBlog = {
    id: crypto.randomUUID(),
    contenido: contenido,
    titulo: titulo,
    imagen: imagen,
    descripcion: descripcion,
    autor,
  };
  const nuevoBlog = await Blog.create(datosBlog);
  return nuevoBlog;
};
export const updateBlog = async (
  id,
  contenido,
  titulo,
  imagen,
  autor,
  descripcion
) => {
  console.log("id buscado", id);

  const blogActualizado = await Blog.findOneAndUpdate(
    { id },
    { contenido, titulo, autor, imagen, descripcion },
    { new: true }
  );

  if (!blogActualizado) {
    console.log("no se encontro el blog para actualizar");
    return null;
  } else {
    console.log("blog actualizado bien", blogActualizado);
    return blogActualizado;
  }
};

export const deleteBlog = async (id) => {
  if (typeof id === "object" && id.id) {
    id = id.id; // Extrae el UUID si viene en un objeto
  }

  const blogBorrado = await Blog.findOneAndUpdate(
    { id: id },
    { isHabilitado: false }
  );

  return blogBorrado;
};
