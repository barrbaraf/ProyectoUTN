import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { NavLink } from "react-router-dom";
import "./FooterHeader.css"
const links = [{ to: "/", label: "Inicio" }];

const loggedLinks = [
    { to: "/crearblog", label: "Crear un Blog", className: "link-end" },
    { to: "/misblogs", label: "Mis Blogs", className: "link-end" },
    { to: "/logout", label: "Cerrar Sesion", className: "link-end" },
];

const logoutLinks = [
    { to: "/login", label: "Login", className: "link-end" },
    { to: "/register", label: "Register", className: "link-end" },
];

const Header = () => {
    const { isLogged } = useContext(AuthContext);

    return (
        <nav className="header">
            <div className="nav-links">
                {links.map((link) => (
                    <NavLink key={link.to} to={link.to}>
                        {link.label}
                    </NavLink>
                ))}
            </div>
            <div className="auth-links">
                {isLogged &&
                    loggedLinks.map((link) => (
                        <NavLink key={link.to} to={link.to}>
                            {link.label}
                        </NavLink>
                    ))}
                {!isLogged &&
                    logoutLinks.map((link) => (
                        <NavLink key={link.to} to={link.to}>
                            {link.label}
                        </NavLink>
                    ))}
            </div>
        </nav>
    );
};

export default Header;
