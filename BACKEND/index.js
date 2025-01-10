import express from "express";
import routerVehiculos from "./router/routerVehiculo.js";
import env from "dotenv";
import mongoose from "mongoose";
import routerContenido from "./router/routerContenido.js";

env.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/vehiculos", routerVehiculos);
// app.use("/user", routerVehiculos)
app.use("/contenido", routerContenido);

app.use((req, res) => {
  res.status(404).json({ error: "error 404 entro aqui" });
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(PORT, () => {
  console.log(`corriendo en puerto ${PORT}`);
});
