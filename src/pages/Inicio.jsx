import React from 'react'
import Encabezado from '../components/Encabezado'
import Operacion from '../components/Inicio/Operacion'
const Buscador=()=>{
    return(
        <div>
            <Encabezado isHome={false}/>
            <Operacion/>
        </div>
    )
}

export default Buscador