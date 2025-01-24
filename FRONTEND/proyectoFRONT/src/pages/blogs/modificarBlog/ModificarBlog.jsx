import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ModificarBlog.css"

const ModificarBlog =()=>{
    

    return(
            <div className="contenedorModificar">
                <h1>MODIFICAR BLOG</h1>
                <div className="formulario">
                    
                    <form onSubmit={{}}>
                    
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
                    <div className="boton">
                    
                        <button type="submit">Crear</button>
    
                    </div>
                    </form>

                </div>
                
                    
            </div>
        
    )
}
export default ModificarBlog
