
import "./AreaTexto.css"

const AreaTexto = (props) => {
    console.log("Datos: ", props.titulo);
    const placeholderModificado = `${props.placeholder}`

    return <div className="area_texto">
        <label>{props.titulo}</label>
        <textarea placeholder={placeholderModificado}/>
    </div>

}

export default AreaTexto