import "./BlogHome.css";
import { useNavigate } from "react-router-dom";

const Vehiculo = ({ vehiculo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/vehiculos/${vehiculo.id}`);
  };

  return (
    <div className="contenedorBlog" onClick={handleClick}>
      <img src={vehiculo.imagen} className="blog-image" />

      <div className="datos">
        <div className="subdatos">
          <h2>{vehiculo.marca}</h2>

          <p className="descripcion">{vehiculo.descripcion}</p>
          <p className="autor">{vehiculo.autor}</p>
        </div>

        <p className="fecha">
          {new Date(vehiculo.fechaPublicacion).toLocaleString("es")}
        </p>
      </div>
    </div>
  );
};

export default Vehiculo;
