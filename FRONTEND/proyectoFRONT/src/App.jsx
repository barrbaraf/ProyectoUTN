import "./App.css";
import Productos from "./pages/Productos/Productos";
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import CrearProducto from "./pages/Productos/crearProducto/CrearProducto";
import ModificarProducto from "./pages/Productos/modificarProducto/ModificarProducto";
import MisProductos from "./pages/MisProductos/MisProductos";
import DetalleProducto from "./pages/Productos/DetalleProducto";
import Login from "./pages/Login/Login";
import Register from "./pages/Registro/Register";

function App() {
    
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}></Route> 
      
      <Route path="/productos" element={<Productos/>}></Route>
      
      <Route path="/Productos/:id" element={<DetalleProducto/>}></Route>

     
     <Route path= "/mis-productos/iduser" element={<MisProductos/>}></Route>
      
      <Route path="/crear" element={<CrearProducto/>}></Route>

      
       <Route path="/modificar-producto/:idUser" element={<ModificarProducto/>}></Route>

       <Route path="/login" element={<Login/>}></Route>
      
      <Route path="/register" element={<Register/>}></Route>
     
      {/* <Route path="/perfil" element={</>}></Route> */}

    </Routes>
    </BrowserRouter>
  )}

export default App;

