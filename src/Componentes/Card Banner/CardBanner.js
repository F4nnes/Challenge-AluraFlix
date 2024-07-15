

import FrontTitulo from "../Titulos/Front"
import VideoBanner from "./caratulaBanner"

import "./CardBanner.css"


const CardBanner = () => {
    return <section className="card_banner">

        <div className="info_banner">
            <div className="titulo">
                <FrontTitulo />
            </div>
            <h1>Challenge React</h1>
            <p>
                Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte
                en la resolución de un problema para poder aplicar todos los conocimientos adquiridos
                en la formación React.
            </p>
        </div>

        <div className="vid_sec">
            <VideoBanner />
        </div>

    </section>

}

export default CardBanner