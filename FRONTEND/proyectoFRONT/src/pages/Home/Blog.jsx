import "./Blog.css"
import { useNavigate } from "react-router-dom"

const Blog = ({blog})=> {
    const navigate=useNavigate()

    const hanledeClick =()=> {
        navigate(`/blogs/${blog.source.id}`)

    }
    return(
        <div className="contenedorBlog" onClick={hanledeClick}>
            <img src={blog.urlToImage} alt={blog.description} />
            <div className="datos">
                <h2 className="datos">{blog.title}</h2>
                <div className="titulo">
                    <p className="autor">{blog.author}</p>
                    <p className="fecha">{new Date(blog.publishedAt).toLocaleString("es")}</p>  
                </div>
                <p className="descripcion">{blog.description}</p>
                
            </div>
        </div>
    )
}
export default Blog