
import Banner from "../Componentes/Banner/Banner"
import ContenedorMain from "../Componentes/ContenedorMain"
import ModalZoom from "../Componentes/ModalZoom"
import banner from "../assets/img/BannerCambio.png"
import "./home.css"


const Home = () => {
    return (

        <main className="containerHome">
            <Banner backgroundImage={banner}></Banner>
            <ContenedorMain/>
            <ModalZoom/>
            
        </main>

    )
}

export default Home