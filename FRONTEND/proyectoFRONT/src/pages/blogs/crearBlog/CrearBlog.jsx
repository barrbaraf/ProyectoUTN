import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./CrearBlog.css";

const backurl = import.meta.env.VITE_BACK_URL;

const CrearBlog = () => {
  const navigate = useNavigate();
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [contenido, setContenido] = useState("");
  const [imagen, setImagen] = useState(null); 
  const [autor, setAutor] = useState("");
  const [error, setError] = useState(""); 

  const handleImageChange = (e) => {
    setImagen(e.target.files[0]);
  };

  const handleCrear = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descripcion", descripcion);
    formData.append("contenido", contenido);
    formData.append("autor", autor);
    if (imagen) {
      formData.append("imagen", imagen); 
    }

    const response = await fetch(`${backurl}blogs/`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      navigate("/misblogs");
    } else {
      setError(data.error || "Hubo un problema al crear el blog.");
    }
  };

  const handleVolver = () => {
    navigate("/misblogs");
  };

  return (
    <div className="contenedorCrear">
      <h1>Crear Blog</h1>
      <div className="formulario">
        <form onSubmit={handleCrear}>
          <div className="titulo-descripcion">
            <div className="titulo">
              <label htmlFor="titulo">Titulo</label>
              <input
                type="text"
                id="titulo"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </div>

            <div className="descrip">
              <label htmlFor="descripcion">Descripcion</label>
              <input
                type="text"
                id="descripcion"
                value={descripcion}
                onChange={(e) => setDescripcion(e.target.value)}
              />
            </div>
          </div>

          <div className="contenido-imagen">
            <div className="contenidoForm">
              <label htmlFor="contenido">Contenido</label>
              <textarea
                id="contenido"
                value={contenido}
                onChange={(e) => setContenido(e.target.value)}
              />
            </div>

            <div className="imagenForm">
              <label htmlFor="imagen">Imagen</label>
              <input type="file" id="imagen" onChange={handleImageChange} />
              {imagen && (
                <img
                  src={URL.createObjectURL(imagen)} 
                  alt="Vista previa"
                  style={{ width: "150px", marginTop: "10px" }}
                />
              )}
            </div>

            <div className="autorForm">
              <label htmlFor="autor">Autor</label>
              <input
                type="text"
                id="autor"
                value={autor}
                onChange={(e) => setAutor(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="botones">
            <button type="button" onClick={handleVolver}>
              Volver
            </button>
            <button type="submit">Crear</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CrearBlog;
