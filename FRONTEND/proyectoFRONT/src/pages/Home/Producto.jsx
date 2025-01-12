const Producto=({producto})=>{
    return(
        <div className= "contenedor">
            <img src={producto.urlToImage} alt={producto.description} className="img"/>
            <div className="datosProducto">
                <h2 className="titulo">{producto.title }</h2>
                <p className="autor">{producto.author}</p>
                <p className="fecha">{producto.publishedAt}</p>
            </div>
                <p className="descripcion">{producto.description}</p>
        </div>
        
    )
}
export default Producto