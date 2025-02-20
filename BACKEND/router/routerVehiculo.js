import express from "express";
import {
  createVehiculoController,
  getVehiculoController,
  getVehiculosController,
  updateVehiculoController,
  deleteVehiculoController
  
} from "../controller/controllerVehiculos.js";
import { body } from "express-validator";

const routerVehiculos = express.Router();


routerVehiculos.get("/", getVehiculosController); //obtener todos los vehiculos
routerVehiculos.get("/:id", getVehiculoController); //obtener vehiculo por id

routerVehiculos.post("/",[body("marca").isString().withMessage("La debe ser un string").isLength({min:1,max:30}).withMessage("No puede superar los 30 caracteres")], createVehiculoController); //crear nuevo vehiculo
routerVehiculos.put("/:id", updateVehiculoController); //actualizar informacion de un vehiculo
routerVehiculos.delete("/:id", deleteVehiculoController); //eliminar un vehiculo



export default routerVehiculos;  
