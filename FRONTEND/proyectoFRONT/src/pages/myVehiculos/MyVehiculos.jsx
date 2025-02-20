import { useState, useEffect } from "react"
const backurl= import.meta.env.VITE_BACK_URL;
import MyVehiculo from "./MyVehiculo";
import "./MyVehiculo.css"

const MyVehiculos =()=>{
    const [vehiculos, setVehiculos] = useState([])
    
    const fetchback= async() =>{
        const response = await fetch( `${backurl}vehiculos`)
        const data = await response.json();
        setVehiculos(data.data)
        console.log(data.data);
    }
    
    useEffect(()=>{
        fetchback()
    },[])


    const handleDelete= async (id)=> {
        
        const response = await fetch( `${backurl}vehiculos/${id}`,{
            method:"DELETE",
            headers:{"Content-Type":"application/json"},
        });
        const data = await response.json();
        console.log(data);
        fetchback()

    }




    
    return(
        <div>
            <h1>Vehiculos Publicados</h1>
            <div className="contenedorBlogs">
                {vehiculos.length>0?(
                    vehiculos.map((vehiculo)=>(
                        <MyVehiculo vehiculo={vehiculo} key={vehiculo.id} vehiculos={vehiculo} handleDelete={handleDelete}
                    />
                    ))
                ):(
                    <p>No hay blogs disponibles</p>
                )}
            </div>

        </div>
    )

}
export default MyVehiculos