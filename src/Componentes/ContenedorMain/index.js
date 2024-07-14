
import CardVideo from "../CardVideo"
import BackTitulo from "../Titulos/Back"
import FrontTitulo from "../Titulos/Front"
import InnovaTitulo from "../Titulos/Innova"
import "./contenedor.css"


const ContenedorMain = () => {
    return <section className="main">

        <FrontTitulo />
        <CardVideo/>
        <BackTitulo />
        <InnovaTitulo />

    </section>
}

export default ContenedorMain