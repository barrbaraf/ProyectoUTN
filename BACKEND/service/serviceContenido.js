import { error } from "console";
import contenidoModel from "../model/modelContenidos.js"
import crypto from "crypto";


export const getContenido= async (id)=>{
    const contenido = await contenidoModel.find({id:id})
    return contenido
}

export const getContenidos= async()=>{
    const Contenidos= await contenidoModel.find()
    return Contenidos
}

export const createContenido= async(contenido, titulo,imagen,autor,descripcion)=>{
    const datosContenido={
        id: crypto.randomUUID(),
        contenido:contenido,
        titulo:titulo,imagen:imagen,autor:autor,descripcion:descripcion
    }
    const nuevoContenido= await contenidoModel.create(datosContenido)
    return nuevoContenido
}

export const updateContenido= async(id, contenido, titulo,imagen,autor,descripcion)=>{
    const contenidoActualizado= await contenidoModel.findOneAndUpdate({id:id},{contenido, titulo,imagen,autor,descripcion})
    return contenidoActualizado
}
export const deleteContenido= async(id)=>{
    // const contenidoBorrado= await contenido.findOneAndDelete(id)//borrado fisico

    const contenidoBorrado= await contenidoModel.findOneAndUpdate({id},{isHabilitado:false})//borrado logico
    return contenidoBorrado
}