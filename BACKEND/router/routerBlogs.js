import express from "express"
import { createBlogsController, updateBlogsController,getBlogController,getBlogsController,deleteBlogsController} from "../controller/controllerBlog.js";
const routerBlogs= express.Router();

routerBlogs.get("/",getBlogsController) //todos
routerBlogs.get("/:id",getBlogController)
routerBlogs.post("/",createBlogsController)
routerBlogs.put("/:id",updateBlogsController)
routerBlogs.delete("/:id",deleteBlogsController)

export default routerBlogs