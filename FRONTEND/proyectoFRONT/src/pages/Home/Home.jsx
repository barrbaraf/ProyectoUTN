import {newsMock} from "../../mocks/newsMock"
import { useState, useEffect } from "react"
import Blog from "./MyBlogs"
const Home=()=>{
    const [blogs, setBlogs] = useState(newsMock)
    console.log("blogs")

    useEffect(()=>{
        const fetchback= async() =>{
            const response = await fetch( "http://localhost:3000/productos")
            const data = await response.json();
            console.log(data);
        }

    fetchback()
    },[])
    return(
        <div>
            <h1>Home</h1>
            {blogs.map((blog)=>(<Blog blog={blog} key = {blog.source.id}/>))}
        </div>
    )
}
export default Home