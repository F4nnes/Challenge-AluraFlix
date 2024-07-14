
import CardVideo from "../CardVideo"
import BackTitulo from "../Titulos/Back"
import FrontTitulo from "../Titulos/Front"
import InnovaTitulo from "../Titulos/Innova"
import "./contenedor.css"


const ContenedorMain = () => {
    return <section className="main">

        <FrontTitulo />
        <div className="lineaItems">
        <CardVideo/>
        <CardVideo/>
        <CardVideo/>
        </div>
        
        <BackTitulo />
        <div className="lineaItems">
        <CardVideo/>
        <CardVideo/>
        <CardVideo/>
        </div>

        <InnovaTitulo />
        <div className="lineaItems">
        <CardVideo/>
        <CardVideo/>
        <CardVideo/>
        
        </div>


    </section>
}

export default ContenedorMain