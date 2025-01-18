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
                    <img src={blog.urlToImage} alt={blog.description}/>
                </div>
                
                <div className="Datos">
                    <div className="subdatos">
                        <h2>{blog.title}</h2>
                       
                        <p className="descripcion">{blog.content}</p>
                        
                        <p className="autor">{blog.author}</p>
  
                    </div>
                <p className="fecha">{new Date(blog.publishedAt).toLocaleString("es")}</p>

                </div>
                <div>
                <button className="botonVolver" onClick={hanledeClick}>Volver</button>
                </div>  
               
            </div>
        </>  
        
    )
}
export default DetalleBlog