import "./Blog.css";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blogs/${blog.source.id}`);
    };

    return (
        <div className="contenedorBlog" onClick={handleClick}>
            
            <img src={blog.urlToImage} alt={blog.description} className="blog-image" />
            
            <div className="datos">
                <div className="subdatos">
                    <h2>{blog.title}</h2>
                    
                    <p className="descripcion">{blog.description}</p>
                    
                    <p className="autor">{blog.author}</p>
                </div>
                
            <p className="fecha">
                {new Date(blog.publishedAt).toLocaleString("es")}
                </p>
                
            </div>
        </div>
    );
};

export default Blog;
