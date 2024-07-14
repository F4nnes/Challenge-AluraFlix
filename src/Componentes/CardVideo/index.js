
import "./cardVideo.css"

const CardVideo = () => {
    return <section className="container">
        <div >
            <iframe className="video" width="430px" height="260px" src="https://www.youtube.com/embed/PztCEdIJITY?si=heRR3bj1YP7KisQI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen/>
        </div>

        <div className="borrar">
            <img src="../Imagenes/Delete.png" alt="Borrar" />
            <p>BORRAR</p>
        </div>

        <div className="editar">
            <img src="../Imagenes/Edit.png" alt="Editar" />
            <p>EDITAR</p>
        </div>


    </section>
}

export default CardVideo