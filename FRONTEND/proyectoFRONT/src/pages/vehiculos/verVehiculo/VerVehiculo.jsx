import { useParams } from "react-router-dom"
import { useState,useEffect} from "react"
import DetalleBlog from "./DetalleVehiculo"




const VerVehiculo = ()=>{
    const {idvehiculo}=useParams()

    const [vehiculo,setVechiculo]= useState({})
    const backurl = import.meta.env.VITE_BACK_URL;

    useEffect(()=>{
        const fetchback= async() =>{
            const response = await fetch( `${backurl}vehiculos/${idvehiculo}`)
            const data = await response.json();
            setVechiculo(data.data)
            console.log(data.data);
        }

    fetchback()
    },[idvehiculo])

    
    

    return(
       <DetalleBlog vehiculo={vehiculo}/>
    )

}


export default VerVehiculo 