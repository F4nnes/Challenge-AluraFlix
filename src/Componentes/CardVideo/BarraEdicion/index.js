
import "./BarraEdicion.css"

function BarraEdicion() {
    return <div className="barra">
        <div className="borrar">
            <img src="../Imagenes/Delete.png" alt="Borrar" />
            <p>BORRAR</p>
        </div>

        <div className="editar">
            <img src="../Imagenes/Edit.png" alt="Editar" />
            <p>EDITAR</p>
        </div>
    </div>
}

export default BarraEdicion