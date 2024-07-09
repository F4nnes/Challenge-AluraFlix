import "./ListaOpciones.css"

const ListaOpciones =()=>{

    const categorias =[
        "Front End",
        "Back End",
        "Innovación y Gestión"
    ]

    return <div className="lista-opciones">
        <label>Categorias</label>
        <select>
            {categorias.map((categoria, index)=>{
                return <option key={index} >{categoria}</option>
            })}

        </select>
    </div>
}

export default ListaOpciones