import { useState, useEffect } from "react";
import Blog from "./Blog";
import Vehiculo from "./Vehiculo";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [vehiculos, setVehiculos] = useState([]);

  const backurl = import.meta.env.VITE_BACK_URL;
  // Función para obtener blogs
  const fetchBlogs = async () => {
    const response = await fetch(`${backurl}blogs`);
    const data = await response.json();
    setBlogs(data.data);
  };

  // Función para obtener vehiculos
  const fetchVehiculos = async () => {
    const response = await fetch(`${backurl}vehiculos`);
    const data = await response.json();
    setVehiculos(data.data);
  };

  // Cargar blogs y vehiculos al montar el componente
  useEffect(() => {
    fetchBlogs();
    fetchVehiculos();
  }, []);

  //funcion para autoscroll
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="botones-categorias"></div>

      <h1>Home</h1>
      <div id="blogs" className="blogs">
        <button onClick={() => scrollToSection("vehiculos")}>
          Ver Vehículos
        </button>

        <h2>Blogs</h2>
        {blogs.length > 0 ? (
          blogs.map((blog) => <Blog key={blog.id} blog={blog} />)
        ) : (
          <p className="SinBlogs">No hay blogs disponibles.</p>
        )}
      </div>

      <div id="vehiculos" className="blogs">
        <h2>Vehiculos</h2>  

        <button onClick={() => scrollToSection("blogs")}>Volver a Blogs</button>

        {vehiculos.length > 0 ? (
          vehiculos.map((vehiculo) => (
            <Vehiculo key={vehiculo.id} vehiculo={vehiculo} />
          ))
        ) : (
          <p className="SinVehiculos">No hay Vehiculos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
