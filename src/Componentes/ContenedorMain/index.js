
import BackTitulo from "../Titulos/Back"
import FrontTitulo from "../Titulos/Front"
import InnovaTitulo from "../Titulos/Innova"
import "./contenedor.css"


const ContenedorMain = () => {
    return <section className="main">
        
        <FrontTitulo />
        <BackTitulo />
        <InnovaTitulo />

    </section>
}

export default ContenedorMain