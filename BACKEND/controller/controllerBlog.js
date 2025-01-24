import { getBlogs, getBlog, createBlog,updateBlog,deleteBlog} from "../service/serviceBlogs.js"

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
          return res.status(401).json({status:"error", message:"faltan datos", data:{}})
         }
        const nuevoBlog= await createBlog(contenido,titulo,imagen,autor,descripcion)
        if (nuevoBlog){
            return res.status(201).json({status:"sucess", message:"blogs creado", data:nuevoBlog})
        }else {
            return res.status(400).json({status:"error", message:"no se pudo crear el blog", data:{}})

        }
    } catch (error) {
                console.log(error)

        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})


    }
    
}
export const updateBlogsController=async(req,res)=>{
    try {
        const id= req.params.id

        const {contenido,titulo,imagen,autor,descripcion}= req.body
        if(!contenido || !titulo || !imagen|| !descripcion){
            return res.status(400).json({status:"error", message:"faltan datos", data:{}})
        }
        const blogActualizado= await updateBlog(id,contenido,titulo,imagen,autor,descripcion)
        if (blogActualizado){
            
            return res.status(201).json({status:"sucess", message:"blogs actualizado con exito", data:blogActualizado})
            
        }else {
            console.log(error)

            return res.status(400).json({status:"error", message:"no se pudo actualizar el blog", data:{}})

        }
    } catch (error) {
                    console.log(error)

        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})

    }
    
}
export const deleteBlogsController= async(req,res)=>{
    try {
        const id= req.params.id
        const blogBorrado = await deleteBlog(id)
        
        if (blogBorrado){
            return res.status(201).json({status:"sucess", message:"blogs borrado con exito", data:blogBorrado})
        }else {
            return res.status(400).json({status:"error", message:"no se pudo borrar el blog", data:{}})

        }
    } catch (error) {
        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})

    }
    
}