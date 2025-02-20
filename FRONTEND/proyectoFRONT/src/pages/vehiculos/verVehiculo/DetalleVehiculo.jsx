
import { useNavigate } from "react-router-dom"
import Vehiculo from "../../Home/Vehiculo"


const DetalleVehiculo= ({blog})=> {
    const navigate=useNavigate()

    const hanledeClick =()=> {
        navigate(`/`)

    }

    
    return(
        <>
            <div className="Contenedor">
                <div className="imagen">
                    <img src={Vehiculo.imagen} alt={Vehiculo.descripcion}/>
                </div>
                
                <div className="Datos">
                    <div className="subdatos">
                        <h2>{Vehiculo.marca}</h2>
                       
                        <p className="descripcion">{Vehiculo.descripcion}</p>
                        
                        <p className="autor">{Vehiculo.autor || "autor por defecto"}</p>
  
                    </div>
                <p className="fecha">{new Date(Vehiculo.fechaPublicacion).toLocaleString("es")}</p>

                </div>
                <div>
                <button className="botonVolver" onClick={hanledeClick}>Volver</button>
                </div>  
               
            </div>
        </>  
        
    )
}
export default DetalleVehiculo