import AreaTexto from "../AreaDeTexto/AreaTexto";
import Boton from "../Boton/Boton";
import BotonL from "../BotonLimpiar/BotonL";
import Campo from "../CamposFormulario/Campo";
import ListaOpciones from "../ListaOpciones/ListaOpciones";
import "./editarFormulario.css"

function EditarFormulario() {
    return <main className="editar_formato">

        <section>
            <h1 className="titulo_editar">Editar Card</h1>

            <form>
                <div>
                    <Campo titulo="Título" placeholder="Título nuevo"/>
                    <ListaOpciones />
                    <Campo titulo="Imágen" placeholder="URL de imágen"/>
                    <Campo titulo="Video" placeholder=" URL de video"/>
                    <AreaTexto titulo="Descripción" placeholder="Agregar nueva descripción"/>
                </div>

                <div>
                    <Boton />
                    <BotonL />
                </div>
            </form>



        </section>



    </main>
}

export default EditarFormulario