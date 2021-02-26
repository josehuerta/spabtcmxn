import React from 'react'

const Registro =(props)=>{
    const {fecha,precioMax,precioMin}=props
    return(
        <tr>
            <td>{fecha}</td> 
            <td>{precioMax}</td> 
            <td>{precioMin}</td>
        </tr>
    )
}
export default Registro 