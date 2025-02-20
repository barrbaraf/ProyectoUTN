import { BrowserRouter, Route,Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Registro/Register";
import VerBlog from "./pages/blogs/verBlog/VerBlog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CrearBlog from "./pages/blogs/crearBlog/CrearBlog";
import ModificarBlog from "./pages/blogs/modificarBlog/ModificarBlog";
import MyBlogs from "../src/pages/myBlogs/MyBlogs"
import Logout from "./pages/Login/Logout";
import CrearVehiculo from "./pages/vehiculos/crearVehiculo/CrearVehiculo.jsx"
import VerVehiculo from "./pages/vehiculos/verVehiculo/VerVehiculo.jsx"
import ModificarVehiculo from "./pages/vehiculos/modificarVehiculo/ModificarVehiculo.jsx"
import MyVehiculos from "./pages/myVehiculos/MyVehiculos.jsx"



function App() {
  
 
  
    
  return (
    <BrowserRouter>

    <Header/>
    <Routes>

      <Route path="/" element={<Home/>}></Route> 
      
      {/* BLOGS */}
      <Route path="/blogs/:idblog" element={<VerBlog/>}></Route> 
      <Route path="/crearblog" element={<CrearBlog/>}></Route> 
      <Route path="/misblogs" element={<MyBlogs/>}></Route> 
      <Route path="/modificarblog/:idblog" element={<ModificarBlog/>}></Route> 

    {/*VEHICULOS*/}
    <Route path="/vehiculos/:idvehiculo" element={<VerVehiculo/>}></Route> 
      <Route path="/crearvehiculo" element={<CrearVehiculo/>}></Route> 
      <Route path="/misvehiculos" element={<MyVehiculos/>}></Route> 
      <Route path="/modificarvehiculo/:idvehiculo" element={<ModificarVehiculo/>}></Route> 



      {/* USUARIO */}
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>
      <Route path="/register" element={<Register/>}></Route>

    </Routes>
    
    <Footer/>
    
    </BrowserRouter>
    
    
  )}
  

export default App;

