import React from 'react'

const FormularioRango=(props)=>{
    const {seleccionarFechaInicial,seleccionarFechaFinal}=props
    return(
        <div>
            <div className="form-group mx-2">
            <label htmlFor="fechaInicial">Fecha inicial:</label>
            <input type="date" name="fechaInicial" id="fechaInicial" onChange={(e)=>seleccionarFechaInicial(e.target.value)} />
            </div>
            <div className="form-group mx-2">
                <label htmlFor="fechaFinal">Fecha final:</label>
                <input type="date" name="fechaFinal" id="fechaFinal" onChange={(e)=>seleccionarFechaFinal(e.target.value)} />
            </div>
        </div>
        
    )
}
export default FormularioRango