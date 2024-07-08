import "./Tarjeta.css"


function AgregarTarjeta() {
    return <section className="agregar_tarjeta">
        <div className="titulo_formulario" >
            <h1 className="titulo_principal" >NUEVO VIDEO</h1>
            <h3 className="titulo_secundario" >COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</h3>
        </div>
        <input type="text" placeholder="Crear tarjeta..."></input>
        <label>Titulo</label>
        <input type="text" placeholder="Ingresar el titulo"></input>
        <label>Categoria</label>
        <input type="selection" placeholder="Seleccione una categoria"></input>
        <label>Imagen</label>
        <input type="text" placeholder="Ingresar el enlace de la imagen"></input>
        <label>Video</label>
        <input type="text" placeholder="Ingresar el enlace del video"></input>


    </section>
}

export default AgregarTarjeta