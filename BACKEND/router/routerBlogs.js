import express from "express";
 
  
import {
  createBlogsController,
  updateBlogsController,
  getBlogPopulateController,
  
  getBlogController,
  getBlogsController,
  deleteBlogsController,
} from "../controller/controllerBlog.js";
import { body } from "express-validator";
import multer from 'multer';

//manejo de imagenes con multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Directorio donde se guardarán las imágenes
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Asignar un nombre único al archivo
  }
});

const upload = multer({ storage: storage });

const routerBlogs = express.Router();

routerBlogs.get("/", getBlogsController); //todos
routerBlogs.get("/:id", getBlogController);
routerBlogs.get("/populate/:id", getBlogPopulateController);
routerBlogs.post("/", upload.single('imagen'),[body("titulo").isString().withMessage("El Titulo debe ser un string").isLength({min:1,max:60}).withMessage("No puede superar los 60")] ,createBlogsController);
routerBlogs.put("/:id", updateBlogsController);
routerBlogs.delete("/:id", deleteBlogsController);

export default routerBlogs;
