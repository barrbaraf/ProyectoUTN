import "./VerBlog.css"
import { useNavigate } from "react-router-dom"


const DetalleBlog = ({blog})=> {
    const navigate=useNavigate()

    const hanledeClick =()=> {
        navigate(`/`)

    }

    
    return(
        <>
            <div className="Contenedor">
                <div className="imagen">
                    <img src={blog.imagen} alt={blog.descripcion}/>
                </div>
                
                <div className="Datos">
                    <div className="subdatos">
                        <h2>{blog.titulo}</h2>
                       
                        <p className="descripcion">{blog.contenido}</p>
                        
                        <p className="autor">{blog.autor || "autor por defecto"}</p>
  
                    </div>
                <p className="fecha">{new Date(blog.fechaPublicacion).toLocaleString("es")}</p>

                </div>
                <div>
                <button className="botonVolver" onClick={hanledeClick}>Volver</button>
                </div>  
               
            </div>
        </>  
        
    )
}
export default DetalleBlog