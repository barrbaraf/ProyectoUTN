import Autor from "../model/modelAutor.js"
import { getAutor,getAutores,createAutor,deleteAutor} from "../service/serviceAutor.js"

export const getAutoresController= async(req,res)=>{
    try {
        const autores = await getAutores()
        if (autores){
            return res.status(200).json({status:"sucess", message:"blogs encontrados", data:autores})
        }else {
            return res.status(400).json({status:"error", message:"blogs no encontrados", data:{}})

        }
    } catch (error) {
        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})

        
    }
}


export const getAutorController=async(req,res)=>{
    try {
       const id= req.params.id
       const autor = await getAutor(id)
        if (autor){
            return res.status(200).json({status:"sucess", message:"blogs encontrado", data:autor})
        }else {
            return res.status(400).json({status:"error", message:"blogs no encontrado", data:{}})

        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})


        
    }
        
    
}
export const createAutorController=async(req,res)=>{
    try {
        const {nombre,biografia,fechaNacimiento,redSocial,fotoPerfil}= req.body
        
         if(!nombre || !biografia || !fechaNacimiento || !redSocial ||!fotoPerfil){
          return res.status(400).json({status:"error", message:"faltan datos", data:{}})
         }
        const nuevoAutor= await createAutor(nombre,biografia,fechaNacimiento,redSocial,fotoPerfil)
        if (nuevoAutor){
            return res.status(201).json({status:"sucess", message:"Autor creado", data:nuevoAutor})
        }else {
            return res.status(500).json({status:"error", message:"Error en el servidor", data:{}})

        }
    } catch (error) {
                console.log(error)

        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})


    }
    
}
export const updateAutorController=async(req,res)=>{
    try {
        const {id}= req.params;
        const {nombre,biografia,fechaNacimiento,redSocial,fotoPerfil}= req.body
    
        
            const autor = await Autor.findOne({id:id});

            if (!autor) {
                return res.status(404).send("Autor no encontrado");
            }
    
            // Actualizamos los campos
            autor.nombre = nombre || autor.nombre;
            autor.biografia = biografia || autor.biografia;
            autor.fechaNacimiento = fechaNacimiento || autor.fechaNacimiento;
            autor.redSocial = redSocial || autor.redSocial;
            autor.fotoPerfil = fotoPerfil || autor.fotoPerfil;
    
            // Guardamos los cambios
            await Autor.save();
    
            return res.status(200).json({ message: "Autor actualizado correctamente", data: Autor });
        } catch (error) {
            console.error("Error al actualizar el Autor:", error);
            res.status(500).send("Hubo un error al actualizar el Autor");
        }
    
}
export const deleteAutorController= async(req,res)=>{
    try {
        const id= req.params.id
        const autorBorrado = await deleteAutor(id)
        
        if (autorBorrado){
            return res.status(201).json({status:"sucess", message:"blogs borrado con exito", data:autorBorrado})
        }else {
            return res.status(400).json({status:"error", message:"Blog no encontrado", data:{}})

        }
    } catch (error) {
        return res.status(500).json({status:"error", message:"error en el servidor", data:{}})

    }
    
}