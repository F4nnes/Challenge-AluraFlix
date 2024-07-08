
import "./Header.css"
import { Link } from "react-router-dom"


function Header() {
    return <header className="header">
        <nav  className="barra-nav">
            <img className="logo" src="/Imagenes/Logo.png" alt="AluraFlix" />
            <div className="nav-botones" >
                <Link className="boton-home" to="/">Home</Link>
                <Link className="boton-newv" to="/nuevoVideo">Nuevo Video</Link>
            </div>

        </nav>

    </header>
}


export default Header