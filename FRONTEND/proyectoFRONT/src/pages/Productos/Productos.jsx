import { useEffect, useState } from "react";
import "../../App";
import BotonCategoria from "../../components/BotonCategoria";
import Producto from "../Productos/Producto"

function Productos() {
    const [products, setProducts] = useState([]);
    const [categoria, setCategoria]= useState("Todas")
    const handleCategoria=(categoria)=>{
      setCategoria(categoria)
    }

    useEffect(() => {
      let url=""
      if (categoria==="Todas"){
        url="https://fakestoreapi.com/products/" 
        console.log(url)
      }else{
        url=`https:fakestoreapi.com/products/category/${categoria}`
      }
      
      
        async function fetchBack() {
          const response = await fetch(url);
          const data = await response.json();
          setProducts(data)
          
      } 
     
      fetchBack()
    }, [categoria]);

    return (
        <div>
            <h2>Productos</h2>
            <h3>filtros</h3>
            <BotonCategoria text={"electronica"} valor={"electronics"} functionPadre={handleCategoria}></BotonCategoria>
            <BotonCategoria text={"joyeria"} valor={"jewelery"} functionPadre={handleCategoria}></BotonCategoria>
            <BotonCategoria text={"Ropa hombre"} valor={"men's clothing"} functionPadre={handleCategoria}></BotonCategoria>
            <BotonCategoria text={"Ropa mujer"} valor={"women's clothing"} functionPadre={handleCategoria}></BotonCategoria>
            {products.map((product) => (
                <Producto key={product.id} product={product} />
            ))}
        </div>
    );
}

export default Productos;

