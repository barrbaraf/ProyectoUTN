import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CrearVehiculo.css";
const backurl = import.meta.env.VITE_BACK_URL;

const CrearVehiculo = () => {
  const navigate = useNavigate();
  const [marca, setMarca] = useState("");

  const [color, setColor] = useState("");
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion]=useState("")
  const [autor, setAutor]=useState("")

  useEffect(() => {
    console.log(marca, color, imagen,autor,descripcion);
  }, [marca, color, imagen,autor,descripcion]);

  const handleCrear = async (e) => {
    e.preventDefault();

    const vehiculo = {
      marca: marca,
      color: color,
      imagen: imagen,
      descripcion: descripcion,
      autor:autor
    };

    await fetchback(vehiculo);
    console.log(vehiculo);
    navigate("/misvehiculos");
  };

  const handleVolver = () => {
    navigate("/misvehiculos");
  };

  const fetchback = async (vehiculo) => {
    const response = await fetch(`${backurl}vehiculos/`, {
      method: "POST",
      body: JSON.stringify(vehiculo),
      headers: { "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="contenedorCrear">
      <h1>Crear Vehiculo</h1>
      <div className="formulario">
        <form onSubmit={(e) => handleCrear(e)}>
          <div className="titulo-descripcion">
            <div className="marca">
              <label htmlFor="marca">Marca</label>
              <input
                type="text"
                id="marca"
                onChange={(e) => setMarca(e.target.value)}
              />
            </div>
            <div className="descrip">
                    <label htmlFor="descripcion">Descripcion</label>    
                    <input type="text" id="descripcion" onChange={(e)=> setDescripcion(e.target.value)} />   
                </div>
            <div className="descrip">
              <label htmlFor="color">Color</label>
              <input
                type="text"
                id="color"
                onChange={(e) => setColor(e.target.value)}
              />
              
            </div>
          </div>
          <div className="contenido-imagen">
            <div className="imagenForm">
              <label htmlFor="imagen">Imagen</label>
              <input
                type="text"
                id="imagen"
                onChange={(e) => setImagen(e.target.value)}
              />
            </div>
            <div className="autorForm">
                        <label htmlFor="autor">Autor</label>    
                        <input type="text" id="autor" onChange={(e)=> setAutor(e.target.value)} />
                    </div>
          </div>

          <div className="botones">
            <button onClick={handleVolver}>Volver</button>
            <button type="submit">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearVehiculo;
