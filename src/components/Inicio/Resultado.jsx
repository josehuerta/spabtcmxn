import React from 'react'
import Registro from './Registro'
import '../../styles/Resultados.css'
const Resultado=(props)=>{
    const {valores}=props
    const respuesta=Array.from(valores)
    return(
        <div className='col-12 col-lg-10 my-3 mx-auto rounded shadow py-3 tabla overflow-auto'>
            <h4>Resultado:</h4>
            <table className='table-bordered'>
                <thead>
                    <tr>
                        <th scope='col'>Fecha</th>
                        <th scope='col'>Precio maximo (mxn)</th>
                        <th scope='col'>Precio minimo (mxn)</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        respuesta.map((registro,i)=>{
                            const {fecha,precioMax,precioMin}=registro
                            return <Registro key={i} fecha={fecha} precioMax={precioMax} precioMin={precioMin}/>
                        })
                    }
                </tbody>
            </table>
            
        </div>
    )

    
    
    
}

export default Resultado