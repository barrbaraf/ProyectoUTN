import { useParams } from "react-router-dom"
import { newsMock } from "../../../mocks/newsMock"
import { useState } from "react"
import DetalleBlog from "./DetalleBlog"


const VerBlog = ()=>{

    const {idblog} = useParams()
    
    const [blogs, setBlogs] = useState(newsMock)
    
    const blog= blogs[idblog-1]
    console.log(blog)
    return (
        <DetalleBlog blog={blog}/>
    )
}

export default VerBlog 