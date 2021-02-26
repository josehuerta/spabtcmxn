import React from 'react'
import Propiedad from './Propiedad'
const DescripcionComponente =(props)=>{
    const {titulo,descripcion,propiedades}=props
    return (
        
            <div className="">
                    <div className="bg-primary ml-5 text-white px-2 w-75">
                        <h5 >{titulo}:</h5>
                        <p>{descripcion}</p>
                    </div>
                    <table className="table table-bordered w-75 ml-5 mt-2 mb-5">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col">Propiedad</th>
                            <th>Tipo</th>
                            <th>Descripcion</th>
                            <th>Valor por default</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            propiedades.map((propiedad,i)=>{
                                
                                return(
                                    <Propiedad key={i} datos={propiedad} />
                                )
                                
                            })

                        }
                        
                    </tbody>
                </table>
        </div>
        
    )
}
export default DescripcionComponente