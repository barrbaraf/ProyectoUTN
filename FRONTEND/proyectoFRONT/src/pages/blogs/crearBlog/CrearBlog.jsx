import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CrearBlog.css"
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
    const fetchback = async(blog)=> {
        const response = await fetch (`${backurl}blogs/`,{method: "POST",
            body: JSON.stringify(blog),
            headers: {"Content-Type": "application/json"},
        });
        const data= await response.json();
        console.log(data)
    }

    return (
        <div className="contenedorCrear">
            <h1>Crear Blog</h1>
            <div className="formulario">
                <form onSubmit={(e)=> handleCrear(e)}>
                
                <div className="titulo-descripcion">
                    
                    <div className="titulo">
                    
                        <label htmlFor="titulo">Titulo</label>    
                        <input type="text" id="titulo" onChange={(e)=> setTitulo(e.target.value)} />

                    </div>
                
                     <div className="descrip">
                    <label htmlFor="descripcion">Descripcion</label>    
                    <input type="text" id="descripcion" onChange={(e)=> setDescripcion(e.target.value)} />   
                </div>
                
                </div>
                <div className="contenido-imagen">
                    
                    <div className="contenidoForm">
                        <label htmlFor="contenido">Contenido</label>    
                        <textarea type="text" id="contenido" onChange={(e)=> setContenido(e.target.value)} />
                    </div>
                    
                    <div className="imagenForm">
                        <label htmlFor="imagen">Imagen</label>    
                        <input type="file" id="imagen" onChange={(e)=> setImagen(e.target.value)} />
                    </div>

                </div>
                
                <div className="botones">
                    <button onClick={handleVolver}>Volver</button>
                    <button type="submit">Crear</button>

                </div>
                </form>  
            </div>
            
                
        </div>
    );
};

export default CrearBlog;
