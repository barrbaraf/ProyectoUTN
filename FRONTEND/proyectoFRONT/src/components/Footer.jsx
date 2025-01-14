import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import "./FooterHeader.css"
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-section">
                <div className="sobre-nosotros">
                    <h3>Sobre nosotros</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sequi at est officia vel praesentium alias nam
                        distinctio quisquam accusantium earum ex, tempore
                        ratione! Ad quod aliquid incidunt ratione repellendus
                        aspernatur.
                    </p>
                </div>
                <div className="enlaces">
                    <h3>Enlaces</h3>
                    <ul>
                        <li>
                            <a href="">Contacto</a>
                        </li>
                        <li>
                            <a href="">Términos y condiciones</a>
                        </li>
                    </ul>
                </div>
                <div className="redessociales">
                    <h3>Redes Sociales</h3>
                    <ul>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faTwitter} className="icono" />
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <FontAwesomeIcon icon={faFacebook} className="icono" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2025 Mi sitio BLOG. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
