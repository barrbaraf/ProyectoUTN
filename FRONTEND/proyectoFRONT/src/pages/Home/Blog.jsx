import "./BlogHome.css"
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogs/${blog.id}`);
    };

    return (
        <div className="contenedorBlog" onClick={handleClick}>
            
            <img src={blog.imagen} alt={blog.descripcion} className="blog-image" />
            
            <div className="datos">
                <div className="subdatos">
                    <h2>{blog.titulo}</h2>
                    
                    <p className="descripcion">{blog.descripcion}</p>
                    
                    <p className="autor">{blog.autor}</p>
                </div>
                
            <p className="fecha">
                {new Date(blog.fechaPublicacion).toLocaleString("es")}
                </p>
                
            </div>
        </div>
    );
};

export default Blog;
