import Vehiculo from "../model/modelvehiculos.js";
import crypto from "crypto";


export const getVehiculo = async (id) => {
  const vehiculo = await Vehiculo.find({id:id})
  return vehiculo;
};

export const getVehiculos = async () => {
  const vehiculos2 = await Vehiculo.find();
  return vehiculos2;
};

export const createVehiculo = async ({ matricula, color }) => {
  console.log(matricula, color);
  const vehiculo = {
    id: crypto.randomUUID(),
    matricula: matricula,
    color: color,
    ishabilitado: true,
  };
  const vehiculo2 = await Vehiculo.create(vehiculo);
  return vehiculo2;
};

export const updateVehiculo = async ({ id, matricula, color }) => {
  const vehiculoActualizado = await Vehiculo.findOneAndUpdate({id:id},{matricula:matricula, color:color})
  if (!vehiculoActualizado) {
    return -1
  } else {
      return vehiculoActualizado;
  }
};
export const deleteVehiculo = async (id) => {
  const vehiculo = await Vehiculo.findOneAndUpdate({id:id},{ishabilitado:false})
  if (!vehiculo) {
    return -1;
  } else {
    return vehiculo;
  }
};
