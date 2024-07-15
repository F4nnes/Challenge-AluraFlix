import AreaTexto from "../AreaDeTexto/AreaTexto";
import Boton from "../Boton/Boton";
import BotonL from "../BotonLimpiar/BotonL";
import Campo from "../CamposFormulario/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import "./editarFormulario.css"

function EditarFormulario() {
    return <dialog className="editar_formato">

        <section>
            <div className="cross">
                <img className="cerrar" src="./Imagenes/cerrar.png" alt="cerrar" />
            </div>
            <h1 className="titulo_editar">Editar Card</h1>

            <form>
                <div>
                    <Campo titulo="Título" placeholder="Título nuevo" />
                    <ListaOpciones />
                    <Campo titulo="Imágen" placeholder="URL de imágen" />
                    <Campo titulo="Video" placeholder=" URL de video" />
                    <AreaTexto titulo="Descripción" placeholder="Agregar nueva descripción" />
                </div>

                <div className="botons">
                    <Boton />
                    <BotonL />
                </div>
            </form>



        </section>



    </dialog>
}

export default EditarFormulario