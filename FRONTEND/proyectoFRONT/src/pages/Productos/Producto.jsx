import "../../Product.css"
import { useNavigate } from "react-router-dom";

const Producto = ({ product }) => {
    console.log(product)
    const navigate= useNavigate()
    const handleClick =()=>{
        navigate(`/productos/${product.id}`)
    }
    return (
        <div className="card" onClick={handleClick}>
            <h2>{product.title}</h2>
            <img className="imagen" src={product.image} alt={product.description} />
            <p>${product.price}</p>
        </div>
    );
};

export default Producto;
