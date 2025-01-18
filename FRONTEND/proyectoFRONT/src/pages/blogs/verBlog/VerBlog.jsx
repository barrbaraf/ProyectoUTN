import { useParams } from "react-router-dom"
import { useState,useEffect} from "react"
import DetalleBlog from "./DetalleBlog"
import { newsMock } from "../../../mocks/newsMock"



const VerBlog = ()=>{
    const {idblog}=useParams()

    const [blogs, serBlogs]= useState(newsMock)

    const blog = blogs[idblog-1]
    console.log(blog)

    return(
       <DetalleBlog blog={blog}/>
    )

}


export default VerBlog 