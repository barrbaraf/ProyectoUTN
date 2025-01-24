
import { useState, useEffect } from "react"
 import Blog from "./Blog"

const backurl= import.meta.env.VITE_BACK_URL;
const Home=()=>{
    const [blogs, setBlogs] = useState([])
    console.log(blogs)

    useEffect(()=>{
        const fetchback= async() =>{
            const response = await fetch( "http://localhost:3000/blogs")
            const data = await response.json();
            setBlogs(data.data)
            console.log(data.data);
        }

    fetchback()
    },[])
    console.log(backurl)
    return(
        <div>
            {blogs.length > 0 ? (
                blogs.map((blog) => (
                    <Blog key={blog.id} blog={blog} /> // Pasa cada blog individualmente
                ))
            ) : (
                <p className="SinBlogs">No hay blogs disponibles.</p>
            )}
        </div>
    )
}
export default Home