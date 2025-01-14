import { useNavigate } from "react-router-dom";
import { useState } from "react";

const MyBlogs = () => {
    const navigate = useNavigate();

    // Lista de blogs
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            tittle: "Primer Blog",
            description: "Descripción del primer blog",
            content: "Contenido del primer blog",
            urlToImage: "imagen1.jpg",
        },
        {
            id: 2,
            tittle: "Segundo Blog",
            description: "Descripción del segundo blog",
            content: "Contenido del segundo blog",
            urlToImage: "imagen2.jpg",
        },
    ]);

    const handleModificar = (id) => {
        const blog = blogs.find((b) => b.id === id);
        navigate(`/modificarblog/${id}`, { state: blog });
    };

    return (
        <>
            <h1>MyBlogs</h1>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h2>{blog.tittle}</h2>
                    <p>{blog.description}</p>
                    <p>{blog.content}</p>
                    <img src={blog.urlToImage} alt="Imagen del blog" />
                    <button onClick={() => handleModificar(blog.id)}>Modificar Blog</button>
                </div>
            ))}
        </>
    );
};

export default MyBlogs;
