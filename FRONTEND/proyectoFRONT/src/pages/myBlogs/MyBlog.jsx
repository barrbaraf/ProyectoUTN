import { useNavigate } from "react-router-dom";
import "./MyBlogs.css"


const MyBlog = ({ blogs, handleDelete}) => {
    const navigate = useNavigate();
       

    const handleUpdate= async (id)=> {
        navigate(`/modificarblog/${id}`)
    }


    return (
        <div className="contenedorBlog" >
            
            <img src={blogs.imagen} alt={blogs.descripcion} className="blog-image" />
            
            <div className="datos">
                <div className="subdatos">
                    <h2>{blogs.titulo}</h2>
                    
                    <p className="descripcion">{blogs.descripcion}</p>
                    
                    <p className="autor">{blogs.autor}</p>
                </div>
                
            <p className="fecha">
                {new Date(blogs.fechaPublicacion).toLocaleString("es")}
            </p>
            <button onClick={()=> handleDelete(blogs.id)}>Borrar</button>
            <button onClick={()=> handleUpdate(blogs.id)}>Modificar</button>
                
            </div>
        </div>
    );
};

export default MyBlog;
