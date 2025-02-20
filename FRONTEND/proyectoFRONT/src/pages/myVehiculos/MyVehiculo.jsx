import { useNavigate } from "react-router-dom";


const MyVehiculo = ({ vehiculos, handleDelete}) => {
    const navigate = useNavigate();
       

    const handleUpdate= async (id)=> {
        navigate(`/modificarvehiculo/${id}`)
    }


    return (
        <div className="contenedorBlog" >
            
            <img src={vehiculos.imagen} alt={vehiculos.descripcion} className="blog-image" />
            
            <div className="datos">
                <div className="subdatos">
                    <h2>{vehiculos.marca}</h2>
                    
                    <p className="descripcion">{vehiculos.descripcion}</p>
                    
                    <p className="autor">{vehiculos.autor}</p>
                </div>
                
            <p className="fecha">
                {new Date(vehiculos.fechaPublicacion).toLocaleString("es")}
            </p>
            <button onClick={()=> handleDelete(vehiculos.id)}>Borrar</button>
            <button onClick={()=> handleUpdate(vehiculos.id)}>Modificar</button>
                
            </div>
        </div>
    );
};

export default MyVehiculo;
