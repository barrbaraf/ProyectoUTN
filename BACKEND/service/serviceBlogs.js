import Blog from "../model/modelBlog.js"
import crypto from "crypto";

export const getBlogs =async()=>{
    const blogs = await Blog.find({isHabilitado: true})
    return blogs

}
export const getBlog =async(id)=>{
    const blog =await Blog.findOne({id:id})
    return blog
}
export const createBlog =async(contenido,titulo,imagen,autor,descripcion)=>{
    const datosBlog={
        
        id:crypto.randomUUID(),contenido:contenido,titulo:titulo,imagen:imagen,autor,descripcion

    }
    const nuevoBlog = await Blog.create(datosBlog)
    return nuevoBlog

}
export const updateBlog =async(id,contenido,titulo,imagen,descripcion)=>{
    const blogActualizado =await Blog.findOneAndUpdate({id},{contenido,titulo,imagen,descripcion})
    if (!blogActualizado){
        return -1
    }else {
        return blogActualizado
    }
    } 

export const deleteBlog =async(id)=>{
    // const blogBorrado = await Blog.findOneAndDelete(id)
    const blogBorrado = await Blog.findOneAndUpdate({id},{isHabilitado:false})
    
    return blogBorrado

}