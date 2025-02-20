import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./ModificarVehiculo.css";


const ModificarVehiculo = () => {
    const { idblog } = useParams();
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [contenido, setContenido] = useState("");
    const [imagen, setImagen] = useState("");
    const navigate = useNavigate();
    console.log("datos que entran",{titulo,contenido,imagen,descripcion})

    // Obtener los datos del blog
    useEffect(() => {
        const fetchBlog = async () => {
            const response = await fetch(`http://localhost:3000/blogs/${idblog}`);
            const data = await response.json();
            if (data.data) {
                setTitulo(data.data.titulo || "");
                setDescripcion(data.data.descripcion || "");
                setContenido(data.data.contenido || "");
                setImagen(data.data.imagen || "");
            }
        };
        fetchBlog();
    }, [idblog]);

    // Manejo de la modificación del blog
    const handleModificar = async (e) => {
        e.preventDefault();

        const blog = { titulo, descripcion, contenido, imagen };
        console.log("datos enviados", blog)

        const response = await fetch(`http://localhost:3000/blogs/${idblog}`, {
            method: "PUT",
            body: JSON.stringify(blog),
            headers: { "Content-Type": "application/json" },
        });

        const data = await response.json();
        console.log(data)
        navigate("/misblogs/")

    };

    const handleVolver =()=>{
        navigate("/misblogs/")
    }

    return (
        <div className="contenedorModificar">
            <h1>MODIFICAR BLOG</h1>
            <div className="formulario">
                <form onSubmit={(e)=>handleModificar(e)}>
                    <div className="titulo-descripcion">
                        <div className="titulo">
                            <label htmlFor="titulo">Titulo</label>
                            <input
                                type="text"
                                id="titulo"
                                onChange={(e) => setTitulo(e.target.value)}
                                value={titulo}
                            />
                        </div>
                        <div className="descrip">
                            <label htmlFor="descripcion">Descripcion</label>
                            <input
                                type="text"
                                id="descripcion"
                                onChange={(e) => setDescripcion(e.target.value)}
                                value={descripcion}
                            />
                        </div>
                    </div>
                    <div className="contenido-imagen">
                        <div className="contenidoForm">
                            <label htmlFor="contenido">Contenido</label>
                            <textarea
                                id="contenido"
                                onChange={(e) => setContenido(e.target.value)}
                                value={contenido}
                            />
                        </div>
                        <div className="imagenForm">
                            <label htmlFor="imagen">Imagen</label>
                            <input
                                type="text"
                                id="imagen"
                                onChange={(e) => setImagen(e.target.value)}
                                value={imagen}
                            />
                        </div>
                    </div>
                    <div className="boton">
                    <button onClick={handleVolver} >Volver</button>
                        <button type="submit">Modificar</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModificarVehiculo;
