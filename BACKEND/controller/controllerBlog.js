import {
  getBlogs,
  getBlog,
  getBlogsPaginado,
  deleteBlog,
  getBlogPopulate,
} from "../service/serviceBlogs.js";
import Blog from  "../model/modelBlog.js"

export const getBlogsController= async(req,res)=>{
    try {
        const blogs = await getBlogs()
        if (blogs){
            return res.status(200).json({status:"sucess", message:"blogs encontrados", data:blogs})
        }else {
            return res.status(400).json({status:"error", message:"blogs no encontrados", data:{}})

        }
    } catch (error) {
        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})

        
    }
}

export const getblogsPaginadoController =async (req,res)=>{
    try {
        const {limit=5, page=1}=req.query;
        const offset= (page-1)*limit

        const blogs = await getBlogsPaginado(offset,limit,page)
        if (blogs){
            return res.status(200).json({status:"sucess", message:"blogs encontrados", data:blogs})
        }else {
            return res.status(400).json({status:"error", message:"blogs no encontrados", data:{}})

        }
    } catch (error) { 
        console.log(error)

        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})
        
    }

}
export const getblogsFiltradoController = async (req, res) => {
  try {
    //const {limit=5, page=1}=req.query;
    //const offset= (page-1)*limit

    const { titulo } = req.query.titulo;
    const blogs = await getBlogsFiltrado(offset, limit, page, titulo);
    if (blogs) {
      return res
        .status(200)
        .json({ status: "sucess", message: "blogs encontrados", data: blogs });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "blogs no encontrados", data: {} });
    }
  } catch (error) {
    console.log(error);

    return res
      .status(500)
      .json({ status: "error", message: "error en el servidor", data: {} });
  }
};

export const getBlogController = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await getBlog(id);
    if (blog) {
      return res
        .status(200)
        .json({ status: "sucess", message: "blogs encontrado", data: blog });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "blogs no encontrado", data: {} });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "error en el servidor", data: {} });
  }
};
export const getBlogPopulateController = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await getBlogPopulate(id);
    if (blog) {
      return res
        .status(200)
        .json({ status: "sucess", message: "blogs encontrado", data: blog });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "blogs no encontrado", data: {} });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ status: "error", message: "error en el servidor", data: {} });
  }
};

// Controlador para crear un blog
export const createBlogsController = async (req, res) => {
  try {
    const { contenido, titulo, autor, descripcion } = req.body;
    // Verificar si no se ha subido una imagen
    if (!req.file) {
      return res.status(400).json({ status: "error", message: "No se ha subido una imagen", data: {} });
    }

    // Obtener la URL de la imagen (la ruta relativa para servir la imagen)
    const imagenUrl = `/uploads/${req.file.filename}`;

    // Verificar si faltan datos del blog
    if (!contenido || !titulo || !descripcion || !autor) {
      return res.status(400).json({ status: "error", message: "faltan datos", data: {} });
    }

    // Crear el nuevo blog con la URL de la imagen
    const nuevoBlog = new Blog({
      contenido,
      titulo,
      imagen: imagenUrl, // Guardamos la URL de la imagen en el campo 'imagen'
      autor,
      descripcion
    });

    // Guardar el blog en la base de datos
    await nuevoBlog.save();

    // Responder con el blog creado
    return res.status(201).json({ status: "success", message: "Blog creado", data: nuevoBlog });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "error", message: "Error en el servidor", data: {} });
  }
};

export const updateBlogsController = async (req, res) => {
  try {
    const { id } = req.params;
    const { contenido, titulo, imagen, autor, descripcion } = req.body;

    const blog = await Blog.findOne({ id: id });

    if (!blog) {
      return res.status(404).send("Blog no encontrado");
    }

    // Actualizamos los campos
    blog.titulo = titulo || blog.titulo;
    blog.descripcion = descripcion || blog.descripcion;
    blog.contenido = contenido || blog.contenido;
    blog.imagen = imagen || blog.imagen;
    blog.autor = autor || blog.autor;

    // Guardamos los cambios
    await blog.save();

    return res
      .status(200)
      .json({ message: "Blog actualizado correctamente", data: blog });
  } catch (error) {
    console.error("Error al actualizar el blog:", error);
    res.status(500).send("Hubo un error al actualizar el blog");
  }
};
export const deleteBlogsController = async (req, res) => {
  try {
    const id = req.params.id;
    const blogBorrado = await deleteBlog(id);

    if (blogBorrado) {
      return res
        .status(201)
        .json({
          status: "sucess",
          message: "blogs borrado con exito",
          data: blogBorrado,
        });
    } else {
      return res
        .status(400)
        .json({ status: "error", message: "Blog no encontrado", data: {} });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", message: "error en el servidor", data: {} });
  }
};
