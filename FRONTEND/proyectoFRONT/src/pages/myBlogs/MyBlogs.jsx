import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./MyBlogs.css";

const MyBlogs = () => {
    const navigate = useNavigate();

    // Lista de blogs
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: "Primer Blog",
            description: "Descripción del primer blog",
            content: "Contenido del primer blog",
            urlToImage: "imagen1.jpg",
            publishedAt: new Date().toISOString(), // Fecha de ejemplo
            author: "Autor 1",
        },
        {
            id: 2,
            title: "Segundo Blog",
            description: "Descripción del segundo blog",
            content: "Contenido del segundo blog",
            urlToImage: "imagen2.jpg",
            publishedAt: new Date().toISOString(), // Fecha de ejemplo
            author: "Autor 2",
        },
    ]);

    const handleModificar = (id) => {
        const blog = blogs.find((b) => b.id === id);
        navigate(`/modificarblog/${id}`, { state: blog });
    };

    return (
        <div className="contenedor">
            <h1>MIS BLOGS</h1>
            <div className="contenedorBlogs">
                
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <div className="contenedorBlog">
                            <div className="imagen">
<img
                                src={blog.urlToImage}
                                alt={blog.description}
                                className="blog-image"
                            />
                            </div>
                            
                            <div className="datos">
                                <div className="subdatos">
                                    <h2>{blog.title}</h2>
                                    <p className="descripcion">{blog.description}</p>
                                    <p className="autor">{blog.author}</p>
                                </div>
                                <p className="fecha">
                                    {new Date(blog.publishedAt).toLocaleString("es")}
                                </p>
                                <button onClick={() => handleModificar(blog.id)}>
                                    Modificar Blog
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            
        </div>
        </div>
    );
};

export default MyBlogs;
