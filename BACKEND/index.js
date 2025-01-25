import express from "express";
import routerVehiculos from "./router/routerVehiculo.js";
import routerBlogs from "./router/routerBlogs.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;




app.use(cors({
  origin: [
    "http://localhost:5173", // Asegúrate de usar la URL de tu frontend
    "https://proyecto-utn-eta.vercel.app/"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true // Si necesitas enviar cookies o cabeceras personalizadas
}));

// Middleware para analizar JSON
app.use(express.json());

// Rutas
app.use("/vehiculos", routerVehiculos);
app.use("/user", routerVehiculos);
app.use("/blogs", routerBlogs);

// Manejo de rutas inexistentes
app.use((req, res) => {
  res.status(404).json({ error: "Error 404: Recurso no encontrado" });
});

// Conexión a la base de datos
mongoose
  .connect(process.env.VITE_MONGO_URL)
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((error) => {
    console.error("Error al conectar a la base de datos:", error.message);
  });

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
