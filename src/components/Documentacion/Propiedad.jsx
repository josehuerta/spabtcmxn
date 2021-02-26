import React from 'react'

const Propiedad =(props)=>{
    const {nombre,tipo,descripcion,valorDefault}=props.datos
    return(
        <tr>
            <td>{nombre}</td>
            <td>{tipo}</td>
            <td>{descripcion}</td>
            <td>{valorDefault}</td>
        </tr>
    )
}
export default Propiedad