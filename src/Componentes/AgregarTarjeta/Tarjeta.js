import "./Tarjeta.css"
import Campo from "../CamposFormulario/Campo.js"


function AgregarTarjeta() {
    return <main className="container_newvid">

        <section className="agregar_tarjeta">

            <h1 className="titulo_principal" >NUEVO VIDEO</h1>
            <h3 className="titulo_secundario" >COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>

            <form className="titulo_formulario" >
                <h5 className="titulo_tarjeta">Crear Tarjeta</h5>

                <Campo titulo="Título" placeholder="título del video" />
                <Campo titulo="Imagen" placeholder="link de la imagen" />
                <Campo titulo="Video"  placeholder="link del video"    />

                <div className="botones">
                    <button className="guardar">Guardar</button>
                    <button className="limpiar">Limpiar</button>
                </div>

            </form>

        </section>

    </main>
}

export default AgregarTarjeta