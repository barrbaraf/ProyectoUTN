import Vehiculo from "../model/modelvehiculos.js";
import crypto from "crypto";

export const getVehiculo = async (id) => {
  const vehiculo = await Vehiculo.find({ id: id });
  return vehiculo;
};

export const getVehiculos = async () => {
  const vehiculos2 = await Vehiculo.find();
  return vehiculos2;
};

export const createVehiculo = async ({
  marca,
  color,
  imagen,
  descripcion,
  autor,
}) => {
  console.log(marca, color, imagen, descripcion, autor);
  const vehiculo = {
    id: crypto.randomUUID(),
    marca: marca,
    color: color,
    imagen: imagen,
    descripcion: descripcion,
    autor: autor,
    ishabilitado: true,
  };
  const vehiculo2 = await Vehiculo.create(vehiculo);
  return vehiculo2;
};

export const updateVehiculo = async ({
  marca,
  id,
  color,
  descripcion,
  autor,
}) => {
  const vehiculoActualizado = await Vehiculo.findOneAndUpdate(
    { id: id },
    { marca:marca, color: color, descripcion: descripcion, autor: autor }
  );
  if (!vehiculoActualizado) {
    return -1;
  } else {
    return vehiculoActualizado;
  }
};
export const deleteVehiculo = async (id) => {
  const vehiculo = await Vehiculo.findOneAndUpdate(
    { id: id },
    { ishabilitado: false }
  );
  if (!vehiculo) {
    return -1;
  } else {
    return vehiculo;
  }
};
