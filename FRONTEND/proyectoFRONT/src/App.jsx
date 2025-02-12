import "./App.css";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Registro/Register";
import Perfil from "./pages/Perfil";
import VerBlog from "./pages/blogs/verBlog/VerBlog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CrearBlog from "./pages/blogs/crearBlog/CrearBlog";
import ModificarBlog from "./pages/blogs/modificarBlog/ModificarBlog";
import MyBlog from "../src/pages/myBlogs/MyBlogs"
import Logout from "./pages/Login/Logout";



function App() {
  
 
  
    
  return (
    <BrowserRouter>

    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}></Route> 
      
      {/* BLOGS */}
      <Route path="/blogs/:idblog" element={<VerBlog/>}></Route> 
      <Route path="/crearblog" element={<CrearBlog/>}></Route> 
      <Route path="/misblogs" element={<MyBlog/>}></Route> 
      <Route path="/modificarblog/:idblog" element={<ModificarBlog/>}></Route> 




      {/* USUARIO */}
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/perfil" element={<Perfil/>}></Route>

    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
    
    
  )}
  

export default App;

