import React, { useState } from 'react'
import MenuOpciones from './MenuOpciones'
import Resultado from './Resultado'

const Operacion=()=>{
    const [opcion,setOpcion]=useState('')
    const [resultado,setResultado]=useState([])
    return(
        <div className="my-3 col-11 col-lg-12 mx-auto">
            <MenuOpciones seleccionarOpcion={setOpcion} opcion={opcion} obtenerResultado={setResultado} />
            <Resultado valores={resultado}/>
        </div>
    )
}
export default Operacion