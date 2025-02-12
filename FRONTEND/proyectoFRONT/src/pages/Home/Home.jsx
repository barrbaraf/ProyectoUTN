import { useState, useEffect } from "react";
import Blog from "./Blog";

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    // Función para obtener blogs
    const fetchBlogs = async () => {
        const response = await fetch("http://localhost:3000/blogs");
        const data = await response.json();
        setBlogs(data.data);
    };

    // Cargar blogs al montar el componente
    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <div>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))
            ) : (
                <p className="SinBlogs">No hay blogs disponibles.</p>
            )}
        </div>
    );
};

export default Home;
