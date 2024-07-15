import "./Campo.css"

const Campo = (props) => {

    console.log("Datos: ", props.titulo);
    const placeholderModificado = `${props.placeholder}...`

    return <div className="campo">
        <label>{props.titulo}</label>
        <input type="text" placeholder={placeholderModificado} required={props.required}/>
    </div>

}

export default Campo