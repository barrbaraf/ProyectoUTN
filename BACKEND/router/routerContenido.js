import express from "express"
import { createContenidoController, updateContenidoController, getContenidoController, getContenidosController,deleteContenidoController } from "../controller/controllerContenido.js";


const routerContenido = express.Router();

routerContenido.get("/",getContenidosController)//llama todos
routerContenido.get("/:id",getContenidoController) //por ID
routerContenido.post("/",createContenidoController)//crear
routerContenido.put("/:id",updateContenidoController)//actualizar
routerContenido.delete("/:id",deleteContenidoController) //borrar logico

export default routerContenido