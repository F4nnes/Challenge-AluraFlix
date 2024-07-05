
import "./Header.css"

function Header() {
    return <header className="header">
        <nav  className="barra-nav">
            <img className="logo" src="/Imagenes/Logo.png" alt="AluraFlix" />
            <div className="nav-botones" >
                <button className="boton-home" >Home</button>
                <button className="boton-newv" >Nuevo Video</button>
            </div>

        </nav>

    </header>
}


export default Header