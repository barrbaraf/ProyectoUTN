import "./App.css";
// import Productos from "./pages/Productos/Productos";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
// import CrearProducto from "./pages/Productos/crearProducto/CrearProducto";
// import ModificarProducto from "./pages/Productos/modificarProducto/ModificarProducto";
// import MisProductos from "./pages/MisProductos/MisProductos";
// import DetalleProducto from "./pages/Productos/DetalleProducto";
 import Login from "./pages/Login/Login";
import Register from "./pages/Registro/Register";
import Perfil from "./pages/Perfil";
import VerBlog from "./pages/blogs/verBlog/VerBlog";
// import CrearBlog from "./pages/blogs/crearBlog/CrearBlog"
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
    
  return (
    <BrowserRouter>

    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}></Route> 
      
      {/* BLOGS */}
      <Route path="/blogs/:idblog" element={<VerBlog/>}></Route> 
      

      {/* PRODUCTOS
      <Route path="/productos" element={<Productos/>}></Route>
      <Route path="/Productos/:id" element={<DetalleProducto/>}></Route>
     <Route path= "/misProductos" element={<MisProductos/>}></Route>
      <Route path="/crear" element={<CrearProducto/>}></Route>
       <Route path="/modificar-producto/:idUser" element={<ModificarProducto/>}></Route> */}

      {/* USUARIO */}
       <Route path="/login" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/perfil" element={<Perfil/>}></Route>

    </Routes>
    <Footer/>
    
    </BrowserRouter>
    
    
  )}
  

export default App;

