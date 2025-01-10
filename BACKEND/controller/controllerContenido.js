import { getContenidos, getContenido,createContenido, updateContenido,deleteContenido} from "../service/serviceContenido.js"

export const getContenidosController = async(req,res)=>{
    try {
        const Contenidos= await getContenidos()
        if(Contenidos){
            return res.status(200).json({
                status: "success",
                msg: "Contenidos encontrados",
                data: Contenidos})
        }else{
            return res.status(400).json({
                status: "error",
                msg: "Contenidos no encontrados",
                data:{}})

        }
    } catch (error) {
       return  res.status(500).json({
            status: "error",
            msg: "Error en el servidor",
            data:{}})
    }

}


export const getContenidoController = async(req,res)=>{
    try {
        const id = req.params.id
        const contenido = await getContenido(id)
        if(contenido){
            return res.status(200).json({
                status: "success",
                msg: "Contenido encontrado",
                data: contenido})
        }else{
            return res.status(400).json({
                status: "error",
                msg: "Contenido no encontrados",
                data:{}})

        }
    } catch (error) {
        return  res.status(500).json({
            status: "error",
            msg: "Error en el servidor",
            data:{}})
    }
    
}

export const createContenidoController =async(req,res)=>{
    try {
        const {contenido, titulo,imagen,autor,descripcion} =req.body
        console.log("Aqui1")
        if(!contenido || !titulo || !imagen || !autor || !descripcion ){
            console.log("Aqui2")

            return res.status(400).json({status: "error",msg: "Faltan datos",data:{}})
        }
        const nuevoContenido= await createContenido(contenido, titulo,imagen,autor,descripcion)
        if(nuevoContenido){
            return res.status(201).json({
                status: "success",
                msg: "Contenido creado",
                data: nuevoContenido})
        }else{
            return res.status(400).json({
                status: "error",
                msg: "No se creo el contenido con exito",
                data:{}})

        }
    } catch (error) {
        console.log(error)
        return  res.status(500).json({
            status: "error",
            msg: "Error en el servidor",
            data:{}})
    }
    
}

export const updateContenidoController = async (req,res)=>{
    try {
        const id = req.params.id
        const {contenido, titulo,imagen,autor,descripcion} =req.body
        if(!contenido || !titulo || !imagen || !autor || !descripcion ){
            return res.status(400).json({
                status: "error",
                msg: "Faltan datos",
                data:{}})
        }
        const blogActualizado = await updateContenido(id,contenido, titulo,imagen,autor,descripcion)
        if(blogActualizado){
            return res.status(201).json({
                status: "success",
                msg: "Contenido Actualizado",
                data: blogActualizado})
        }else{
            return res.status(400).json({
                status: "error",
                msg: "No se pudo actualizar el contenido con exito",
                data:{}})

        }
        
    } catch (error) {
        console.log(error)
        return  res.status(500).json({
            status: "error",
            msg: "Error en el servidor",
            data:{}}) 
    }
    
}

export const deleteContenidoController = async(req,res)=>{
    try {
        const id = req.params.id
        const contenidoBorrado = await deleteContenido(id)
        if(contenidoBorrado){
            return res.status(201).json({
                status: "success",
                msg: "Contenido Borrado",
                data: contenidoBorrado})
        }else{
            return res.status(400).json({
                status: "error",
                msg: "No se pudo borrar el contenido con exito",
                data:{}})

        }
    } catch (error) {
        console.log(error)
        return  res.status(500).json({
            status: "error",
            msg: "Error en el servidor",
            data:{}}) 
    }
    
}