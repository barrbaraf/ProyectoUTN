import Autor from "../model/modelAutor.js";
import crypto from "crypto";

export const getAutores =async()=>{
    const autores = await Autor.find({isHabilitado: true})
    return autores
}


export const getAutor =async(id)=>{
    const autor =await Autor.findOne({id:id})
    return autor
}
export const createAutor=async(nombre,biografia,fechaNacimiento,redSocial,fotoPerfil)=>{
    const datosAutor={
        
        id:crypto.randomUUID(),nombre:nombre,biografia:biografia,fechaNacimiento:fechaNacimiento,redSocial:redSocial,fotoPerfil:fotoPerfil

    }
    const nuevoAutor = await Autor.create(datosAutor)
    return nuevoAutor

}
export const updateAutor =async(id,nombre,biografia,fechaNacimiento,redSocial,fotoPerfil)=>{

    const autorActualizado =await Autor.findOneAndUpdate({id},{nombre,biografia,fechaNacimiento,redSocial,fotoPerfil},{new: true});

    if (!autorActualizado){
        console.log("no se encontro el Autor para actualizar")
        return null
    }else {
        console.log("Autor actualizado bien",autorActualizado);
        return autorActualizado
    }
    } 



export const deleteAutor = async (id) => {
    if (typeof id === "object" && id.id) {
        id = id.id; // Extrae el UUID si viene en un objeto
    }

    const AutorBorrado = await Autor.findOneAndUpdate(
        { id: id }, 
        { isHabilitado: false }
    );

    return AutorBorrado;
};
