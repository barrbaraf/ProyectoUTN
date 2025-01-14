import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom" 
import { AuthContext } from "../../context/AuthContext"

const Login=()=>{
    const navigate = useNavigate()
    const {setIsLogged}=useContext(AuthContext)
    const [user,setUser]= useState("")
    const [pass,setPass]= useState("")

    const handleLogin=(e)=>{
        e.preventDefault()
        setIsLogged(true)
        localStorage.setItem("isLogged",true);
        navigate("/");
        
    }
    return(
        <div>
            <form onSubmit={(e)=>handleLogin(e)}>
                <label htmlFor="user">User</label>
                <input type="text" id="user" onChange={(e)=>setUser(e.target.value)}/>
                <label htmlFor="password">password</label>
                <input type="password" id="password" onChange={(e)=>setPass(e.target.value)}/>
                <button type="submit" >Login</button>
            </form>
        </div>
    )
}
export default Login