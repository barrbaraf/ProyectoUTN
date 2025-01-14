import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const CrearBlog = () => {
    const navigate = useNavigate();
    const [titulo, setTitulo]=useState("")
    const [descripcion, setDescripcion]=useState("")
    const [contenido, setContenido]=useState("")
    const [imagen, setImagen]=useState("")

    useEffect(()=>{
        console.log(titulo,descripcion,contenido,imagen);
    }, [titulo,descripcion,contenido,imagen]);

    const handleCrear = (e) => {
        e.preventDefault();
        navigate("/misblogs");

        const blog ={
            title: titulo,
            description: descripcion,
            content: contenido,
            urlToImage: imagen,
        }
        console.log(blog)
        
    };

    const handleVolver = (e) => {
        navigate("/misblogs");
    };

    return (
        <div>
            <h1>Crear Blog</h1>
            <form onSubmit={(e)=> handleCrear(e)}>
                <label htmlFor="titulo">Titulo</label>    
                <input type="text" id="titulo" onChange={(e)=> setTitulo(e.target.value)} />
                <label htmlFor="descripcion">Descripcion</label>    
                <input type="text" id="descripcion" onChange={(e)=> setDescripcion(e.target.value)} />   
                <label htmlFor="contenido">Contenido</label>    
                <textarea type="text" id="contenido" onChange={(e)=> setContenido(e.target.value)} />
                <label htmlFor="imagen">Imagen</label>    
                <input type="file" id="imagen" onChange={(e)=> setImagen(e.target.value)} />
                <div>
                <button onClick={handleVolver}>Volver</button>
                <button type="submit">Crear</button>

                </div>
                </form>
                
        </div>
    );
};

export default CrearBlog;
