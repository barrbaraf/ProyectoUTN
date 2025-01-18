import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"

const Login = () => {
    const navigate = useNavigate()
    const { setIsLogged } = useContext(AuthContext)
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [error, setError] = useState("")

     const handleLogin = (e) => {
        e.preventDefault()
        setIsLogged(true)
        navigate("/")
    //         localStorage.setItem("isLogged", true)
    //        
     }
    //     // Simulando un check de login
    //     if (user === "admin" && pass === "password") {
    //         
    //     } else {
    //         setError("Usuario o contraseña incorrectos")
    //     }
    // }

    return (
        <div className="login-container">
            <div className="login-card">
                <h2>Iniciar Sesión</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="user">Usuario</label>
                    <input
                        type="text"
                        id="user"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        placeholder="Introduce tu usuario"
                    />
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder="Introduce tu contraseña"
                    />
                    {error && <div className="error-message">{error}</div>}
                    <button type="submit">Iniciar Sesión</button>
                </form>
            </div>
        </div>
    )
}

export default Login
