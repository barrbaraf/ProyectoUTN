import {newsMock} from "../../mocks/newsMock"
import { useState, useEffect } from "react"
import Blog from "./Blog"
const Home=()=>{
    const [blogs, setBlogs] = useState(newsMock)
    console.log("blogs")

    return(
        <div>
            <h1>Home</h1>
            {blogs.map((blog)=>(<Blog blog={blog} key = {blog.source.id}/>))}
        </div>
    )
}
export default Home