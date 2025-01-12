import {
  getVehiculo,
  getVehiculos,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
} from "../service/serviceVehiculo.js";

console.log("si entro");

//LLAMADA A TODOS
export const getVehiculosController = async (req, res) => {
  try {
    const vehiculos = await getVehiculos();
    res.status(200).json({
      status: "success",
      msg: "Listado de vehiculos",
      data: vehiculos,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "error", msg: "Error en el servidor", data: {} });
  }
};

//POR ID
export const getVehiculoController = async (req, res) => {
  try {
    const id = req.params.id;
    const vehiculo = await getVehiculo(id);
    if (!vehiculo) {
      res
        .status(400)
        .json({ status: "error", error: "vehiculo no encontrado", data: {} });
    } else {
      res
        .status(200)
        .json({
          status: "success",
          msg: "vehiculo  encontrado",
          data: { vehiculo },
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", msg: "Error en el servidor", data: {} });
  }
};

//NUEVO
export const createVehiculoController = async (req, res) => {
  try {
    const { matricula, color } = req.body;
    if (!matricula || !color) {
      res.status(400).json({ status: "error", error: "Faltan datos", data: {} });
    }
    const vehiculo = await createVehiculo({ matricula, color });

    res.status(201).json({ status: "success", msg: "Vehiculo creado", data: { vehiculo } });
  } catch (error) {
    console.log(error);
    res.status(500).json({ status: "error", msg: "Error servidor", data: {} });
  }
};

//ACTUALIZAR
export const updateVehiculoController = async (req, res) => {
  try {
    const { matricula, color } = req.body;
    const id = req.params.id;
    if (!matricula && !color) {
      res.status(400).json({ status: "error", error: "Faltan datos", data: {} });
    }
    const vehiculo = await updateVehiculo({ id, matricula, color });

    if (vehiculo == -1) {
      res
        .status(400)
        .json({ status: "error", error: "vehiculo no encontrado", data: {} });
    } else {
      res.status(200).json(vehiculo);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ status: "error", msg: "Error en el servidor", data: {} });
  }
};

//BORRAR
export const deleteVehiculoController = async (req, res) => {
  try {
    const id = req.params.id;
    const vehiculo = await deleteVehiculo(id);
    if (!vehiculo) {
      res
        .status(400)
        .json({ status: "error", error: "vehiculo no encontrado", data: {} });
    } else {
      res
        .status(200)
        .json({
          status: "success",
          msj: "Vehiculo eliminado",
          data: { vehiculo },
        });
    }
  } catch (error) {
    res
      .status(500)
      .json({ status: "error", msg: "Error en el servidor", data: {} });
  }
};
