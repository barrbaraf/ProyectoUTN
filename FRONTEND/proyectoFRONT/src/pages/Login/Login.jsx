import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user,
          password: pass,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Si el login es exitoso, redirigimos al usuario a la página principal sin usar token
        navigate("/home");  // o la página que desees
      } else {
        setError(data.error || "Hubo un problema con el login");
      }
    } catch (err) {
      setError("Hubo un error al conectar con el servidor");
    }
  };

  return (
    <div className="login-container">
      <form className="formulario" onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <label htmlFor="user">Usuario (Email)</label>
        <input
          type="email"
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
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
