import "./Tarjeta.css"
import Campo from "../CamposFormulario/Campo.js"
import ListaOpciones from "../ListaOpciones/ListaOpciones.js"
import AreaTexto from "../AreaDeTexto/AreaTexto.js"
import Boton from "../Boton/Boton.js"
import BotonL from "../BotonLimpiar/BotonL.js"

function AgregarTarjeta() {
    return <main className="container_newvid">

        <section className="agregar_tarjeta">

            <h1 className="titulo_principal" >NUEVO VIDEO</h1>
            <h3 className="titulo_secundario" >COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>

            <form className="titulo_formulario" >
                <h5 className="titulo_tarjeta">Crear Tarjeta</h5>

                <div className="formatos">
                    <Campo titulo="Título" placeholder="título del video" required />
                    <Campo titulo="Imagen" placeholder="link de la imagen" required />
                    <Campo titulo="Video" placeholder="link del video" required />
                    <ListaOpciones required/>
                    <AreaTexto titulo="Descripción" placeholder="¿De qué se trata este video?"  required />
                </div>

                <div className="botones">
                    <Boton />
                    <BotonL />
                    
                </div>

            </form>

        </section>

    </main>
}

export default AgregarTarjeta