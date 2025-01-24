import { useParams } from "react-router-dom"
import { useState,useEffect} from "react"
import DetalleBlog from "./DetalleBlog"




const VerBlog = ()=>{
    const {idblog}=useParams()

    const [blog,setBlog]= useState({})

    useEffect(()=>{
        const fetchback= async() =>{
            const response = await fetch( `http://localhost:3000/blogs/${idblog}`)
            const data = await response.json();
            setBlog(data.data)
            console.log(data.data);
        }

    fetchback()
    },[idblog])

    
    

    return(
       <DetalleBlog blog={blog}/>
    )

}


export default VerBlog 