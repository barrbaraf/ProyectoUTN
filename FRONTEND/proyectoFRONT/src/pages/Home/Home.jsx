import { Link } from "react-router-dom";
import { newsMock } from "../../mocks/newsMock";
import { useState } from "react";
import Producto from "./Producto";

const Home = () => {
    const [productos, setProductos] = useState(newsMock);
    console.log(productos);

    return (
        <div>
            <h1>Home</h1>
            {productos.map((producto) => (
                <Producto producto={producto} key={producto.source.id} />
            ))}
        </div>
    );
};

export default Home;
