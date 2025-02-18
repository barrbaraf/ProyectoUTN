import express from "express";
import routerVehiculos from "./router/routerVehiculo.js";
import routerBlogs from "./router/routerBlogs.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert {type: "json"};

// Cargar variables de entorno
dotenv.config();
console.log("ESTE EEEEEEESSSSSSSS", process.env.MONGO_URL);

connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:5174", // Agregá esta línea
      "https://proyecto-utn-nvbc.vercel.app/",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Middleware para analizar JSON
app.use(express.json());

// Rutas
app.use("/vehiculos", routerVehiculos);
//app.use("/user", routerVehiculos);
app.use("/blogs", routerBlogs);
app.use("/docs", swaggerUi.serve,swaggerUi.setup(swaggerDocument));

// Manejo de rutas inexistentes
app.use((req, res) => {
  res.status(404).json({ error: "Error 404: Recurso no encontrado" });
});

// Conexión a la base de datos

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
