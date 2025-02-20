import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [username, setUsername] = useState("");  
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Verificar que las contraseñas coincidan
    if (pass !== confirmPass) {
      setError("Las contraseñas no coinciden");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user,
          password: pass,
          username: username,  
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/login");
      } else {
        setError(data.error || "Hubo un problema con el registro");
      }
    } catch (err) {
      setError("Hubo un error al conectar con el servidor");
    }
  };

  return (
    <div className="login-container">
      <form className="formulario" onSubmit={handleRegister}>
        <h2>Registrarse</h2>
        <label htmlFor="username">Nombre de Usuario</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Introduce tu nombre de usuario"
        />
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
        <label htmlFor="confirmPassword">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPass}
          onChange={(e) => setConfirmPass(e.target.value)}
          placeholder="Confirma tu contraseña"
        />
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Register;
