import { RegisterUser, LoginUser, actualizarToken } from "../service/serviceUsuario.js";

export const RegisterUserController = async (req, res) => {
    try {
        const { username, password,email,fechaNacimiento } = req.body;
        const user = await RegisterUser(username, password,email,fechaNacimiento);
        if (user===-1) {
            return res.status(400).json({status: "error", menssage: "Usuario en uso, ingrese otro", data:{}});
        }else{
            return res.status(201).json({status: "success", menssage: "usuario creado", data:user});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
}

export const LoginUserController = async (req, res) => {
    try {
        const { username, password } = req.body;
        const {accesstoken, refreshtoken} = await LoginUser(username, password);
        if (!accesstoken || !refreshtoken) {
            return res.status(400).json({status: "error", menssage: "Acceso incorrecto", data:{}});
        }else{
            return res.status(200).json({status: "success", menssage: "Acceso correcto", data:{accesstoken, refreshtoken}});
        }
    } catch (error) {
        console.log(error)
        return res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
}

export const generarTokenController = async (req, res) => {
    try {
        const token = req.headers["refreshtoken"]
        console.log(token)
        if (token) {
            const accessToken = await actualizarToken(token);
            res.status(201).json({status: "success", menssage: "actualizacion exitosa", data:accessToken});
        }
        else{
            res.status(400).json({status: "error", menssage: "token no encontrado", data:{}});

        }
        } catch (error) {
       res.status(500).json({status: "error", menssage: "error en el servidor", data:{}});
    }
}