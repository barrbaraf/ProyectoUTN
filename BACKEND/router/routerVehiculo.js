import express from "express";
import {
  createVehiculoController,
  getVehiculoController,
  getVehiculosController,
  updateVehiculoController,
  deleteVehiculoController,
} from "../controller/controllerVehiculos.js";
import { authMiddleware, isAdmin, isUser } from "../middleware/authMiddleware.js";

const routerVehiculos = express.Router();


routerVehiculos.get("/",authMiddleware, getVehiculosController); //obtener todos los vehiculos
routerVehiculos.get("/:id",isUser, getVehiculoController); //obtener vehiculo por id
routerVehiculos.post("/",isAdmin, createVehiculoController); //crear nuevo vehiculo
routerVehiculos.put("/:id",isAdmin, updateVehiculoController); //actualizar informacion de un vehiculo
routerVehiculos.delete("/:id",isAdmin, deleteVehiculoController); //eliminar un vehiculo



export default routerVehiculos;  
