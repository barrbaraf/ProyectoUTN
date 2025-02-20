import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Usuario } from "../model/modelUsuario.js";
import { generarRefreshToken, generarAccessToken } from "../utils/generarTokens.js";

export const RegisterUser = async (username, password, email,fechaNacimiento) => {
    const usuario = await Usuario.findOne({username});
    console.log(usuario)
    if(usuario){
        return -1
    }
    const passhash = await bcrypt.hash(password, 10);
    const newUsuario = await Usuario.create({username, password: passhash,email,fechaNacimiento});
    return newUsuario
}

export const LoginUser = async (username, password) => {
    try {
        const user = await Usuario.findOne({username});
        //si no existe buscamos un usuario con el email = username // adminNuevo o admiNnUEVO@gmail.com
    if(!user) {
        return -1
    }
    const passmatch = bcrypt.compare(password, user.password);
    if(!passmatch) {
        return -1
    }
    const accesstoken = generarAccessToken({id:usuarioEnBD._id,usename:usuarioEnBD.usename});
    const refreshtoken = generarRefreshToken({id:usuarioEnBD._id,usename:usuarioEnBD.usename});
    return {accesstoken, refreshtoken}
    } catch (error) {
        console.log(error)
    }
    
}

export const actualizarToken = async (refreshToken) => {
    const payload = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET|| "clave123");

    const usuario = Usuario.findById(payload.id);

    if(!usuario) {
        return -1
    }

    const accesstoken = generarAccessToken({id:payload.id, username: payload.username});
    return accesstoken
}