import React from 'react'
import '../../styles/Tarea.css'
const Tarea=(props)=>{
    const {titulo,descripcion}=props
    return(
        <div className="bg-white py-4 px-4  border shadow rounded col-10 col-md-5 col-lg-3 mx-3 my-2 tarea">
            <h4>{titulo}</h4>
            <p>{descripcion}</p>
        </div>
    )
}

export default Tarea