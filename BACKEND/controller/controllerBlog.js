import { getBlogs, getBlog, createBlog,updateBlog,deleteBlog} from "../service/serviceBlogs.js"
import Blog from "../model/modelBlog.js"
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

export const getBlogController=async(req,res)=>{
    try {
       const id= req.params.id
       const blog = await getBlog(id)
        if (blog){
            return res.status(200).json({status:"sucess", message:"blogs encontrado", data:blog})
        }else {
            return res.status(400).json({status:"error", message:"blogs no encontrado", data:{}})

        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})


        
    }
        
    
}
export const createBlogsController=async(req,res)=>{
    try {
        const {contenido,titulo,imagen,autor,descripcion}= req.body
        console.log(req.body)
         if(!contenido || !titulo || !imagen || !descripcion){
          return res.status(400).json({status:"error", message:"faltan datos", data:{}})
         }
        const nuevoBlog= await createBlog(contenido,titulo,imagen,autor,descripcion)
        if (nuevoBlog){
            return res.status(201).json({status:"sucess", message:"blogs creado", data:nuevoBlog})
        }else {
            return res.status(500).json({status:"error", message:"Error en el servidor", data:{}})

        }
    } catch (error) {
                console.log(error)

        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})


    }
    
}
export const updateBlogsController=async(req,res)=>{
    try {
        const {id}= req.params;
        const {contenido,titulo,imagen,descripcion}= req.body
    
        
            const blog = await Blog.findOne({id:id});

            if (!blog) {
                return res.status(404).send("Blog no encontrado");
            }
    
            // Actualizamos los campos
            blog.titulo = titulo || blog.titulo;
            blog.descripcion = descripcion || blog.descripcion;
            blog.contenido = contenido || blog.contenido;
            blog.imagen = imagen || blog.imagen;
    
            // Guardamos los cambios
            await blog.save();
    
            return res.status(200).json({ message: "Blog actualizado correctamente", data: blog });
        } catch (error) {
            console.error("Error al actualizar el blog:", error);
            res.status(500).send("Hubo un error al actualizar el blog");
        }
    
}
export const deleteBlogsController= async(req,res)=>{
    try {
        const id= req.params.id
        const blogBorrado = await deleteBlog(id)
        
        if (blogBorrado){
            return res.status(201).json({status:"sucess", message:"blogs borrado con exito", data:blogBorrado})
        }else {
            return res.status(400).json({status:"error", message:"Blog no encontrado", data:{}})

        }
    } catch (error) {
        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})

    }
    
}