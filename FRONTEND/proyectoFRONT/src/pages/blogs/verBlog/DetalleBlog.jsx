import "./VerBlog.css"
import { useNavigate } from "react-router-dom"

const DetalleBlog = ({blog})=> {
    const navigate=useNavigate()

    const hanledeClick =()=> {
        navigate(`/`)

    }

    
    return(
        <>
            <div className="contenedorDetalle">
                <img src={blog.urlToImage} alt={blog.description} />
                <div className="datos">
                    <h2 className="datos">{blog.title}</h2>
                    <div className="titulo">
                        <p className="autor">{blog.author}</p>
                        <p className="fecha">{new Date(blog.publishedAt).toLocaleString("es")}</p>  
                </div>
                <p className="descripcion">{blog.content}</p>
                
            </div>
            
            </div>
            <div>
                <button onClick={hanledeClick}>Volver</button>
            </div>
        </>  
        
    )
}
export default DetalleBlog