
import CardVideo from "../CardVideo"
import CardVideoDos from "../CardVideoDos/NewCard"
import CardVideoCinco from "../NewCards/CardVideoCinco/NewCard"
import CardVideoCuatro from "../NewCards/CardVideoCuatro/NewCard"
import CardVideoNueve from "../NewCards/CardVideoNueve/NewCard"
import CardVideoOcho from "../NewCards/CardVideoOcho/NewCard"
import CardVideoSeis from "../NewCards/CardVideoSeis/NewCard"
import CardVideoSiete from "../NewCards/CardVideoSiete/NewCard"
import CardVideoTres from "../NewCards/CardVideoTres/NewCard"
import BackTitulo from "../Titulos/Back"
import FrontTitulo from "../Titulos/Front"
import InnovaTitulo from "../Titulos/Innova"
import "./contenedor.css"


const ContenedorMain = () => {
    return <section className="main">

        <FrontTitulo titulo="Front End"/>
        <div className="lineaItems">
        <CardVideo/>
        <CardVideoDos/>
        <CardVideoTres/>
        </div>
        
        <BackTitulo titulo="Back End"/>
        <div className="lineaItems">
        <CardVideoCuatro/>
        <CardVideoCinco/>
        <CardVideoSeis/>
        </div>

        <InnovaTitulo titulo="Innoación y Gestion"/>
        <div className="lineaItems">
        <CardVideoSiete/>
        <CardVideoOcho/>
        <CardVideoNueve/>
        
        </div>


    </section>
}

export default ContenedorMain