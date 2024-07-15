
import Banner from "../Componentes/Banner/Banner"
import ContenedorMain from "../Componentes/ContenedorMain"
import EditarFormulario from "../Componentes/Modals"
import banner from "../assets/img/BannerCambio.png"
import "./home.css"


const Home = () => {
    return (

        <main className="containerHome">
            <Banner backgroundImage={banner}></Banner>
            <ContenedorMain/>
            <EditarFormulario/>
        </main>

    )
}

export default Home