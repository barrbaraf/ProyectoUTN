import express from "express";
import routerVehiculos from "./router/routerVehiculo.js";
import routerBlogs from "./router/routerBlogs.js";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./database.js";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert {type: "json"};
import routerAutores from "./router/routerAutores.js";
import routerUsuario from "./router/routerUsuario.js"
// Cargar variables de entorno
dotenv.config();
console.log("Url:", process.env.MONGO_URL);

connectDB();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: "*", // Permitir todos los orígenes
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization", "x-refresh-token"],
    credentials: true,
  })
);



// Middleware para analizar JSON
app.use(express.json());

// Rutas
app.use("/vehiculos", routerVehiculos);
app.use("/blogs", routerBlogs);
app.use("/autores",routerAutores)
app.use("/docs", swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.use("/auth", routerUsuario);
app.use('/uploads', express.static('uploads')); // Sirve la carpeta uploads

app.get("/protected",(req,res)=>{
  res.json({message:"Acceso permitido",user:req.user})
})

app.use((req, res) => {
  res.status(404).json({ error: "Error 404: Recurso no encontrado" });
});


app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
