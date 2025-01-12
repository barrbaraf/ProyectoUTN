import mongoose, { Schema } from "mongoose";

const contenidoSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
    contenido:{type: String, required: true},
    titulo: {type: String, required: true},
    imagen: {type: String, required: true},
    autor: {type:String, ref: "autor" }, 
    descripcion: {type: String, required: true},
    fechaPublicacion: {type: Date, default: new Date()},
    isHabilitado: {type:Boolean, default:true}
})

const contenido = mongoose.model("contenido", contenidoSchema)

export default contenido
