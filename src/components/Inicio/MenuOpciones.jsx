import React, { useState } from 'react'
import FormularioRango from './FormularioRango'

const formarParametros=(opcion,fechaInicial,fechaFinal)=>{
    let parametros=''
    if (opcion!==''){
        if (opcion!=='rango'){
            const fecha=new Date()
            const anio=fecha.getFullYear()
            const mes=fecha.getMonth()+1
            const hora=fecha.getHours()
            const fechaComponentes=fecha.toString().split(' ')
            const dia=parseInt(fechaComponentes[2],10)
            parametros=`opcion=${opcion}&fecha=${anio}-${mes}-${dia}&hora=${hora}`
            
        }
        else if (opcion==='rango'){
            if(fechaInicial<=fechaFinal && fechaInicial!=='' &&fechaFinal!==''){
                const fecha=new Date()
                const hora=fecha.getHours()
                parametros=`opcion=${opcion}&hora=${hora}&fechaInicial=${fechaInicial}&fechaFinal=${fechaFinal}`
            }
            else{
                console.log('Las fechas no se colocaron de \n manera correcta')
            } 
        }
    }
    return parametros
}
const solicitarRegistros=async(opcion,fechaInicial,fechaFinal,URL)=>{
    const parametros=formarParametros(opcion,fechaInicial,fechaFinal)
    let registros=''
    
    if (parametros!==''){
        const URLCompleta=`${URL}?${parametros}`
        const response=await fetch(URLCompleta)
        
        if (response.ok){
            registros=await response.json()
        }
        else{
            console.log('No se hayaron registros')
        }
    }
    return registros
}

const MenuOpciones=(props)=>{
    const {opcion,seleccionarOpcion,obtenerResultado}=props

    const [fechaInicial,setFechaInicial]=useState('')
    const [fechaFinal,setFechaFinal]=useState('')

    const handleClick=(e)=>{
        e.preventDefault();
        
        (async()=>{
            const URL="http://127.0.0.1:8000/api/precio-btc-mxn/";
            const registros=await solicitarRegistros(opcion,fechaInicial,fechaFinal,URL)
            if (registros!==''){
                obtenerResultado(registros)
            }
            else{
                alert('No existen registros dados\n esos valores de entrada')
            }
        })()
    }

    return (
        <div className="col-12 col-md-10 col-lg-10 mx-auto rounded shadow py-3">
            <h3 className="mx-auto">Opciones</h3>
            <form action="">
                <div className="form-group d-inline-block mx-2 col-md-5 col-lg-2">
                    <input type="radio" name="opcion" id="ultimas24Hrs" onClick={()=>seleccionarOpcion('ultimas24Hrs')} />
                    <label htmlFor="ultimas24Hrs" >Ultimas 24 hrs</label>
                </div>
                <div className="form-group d-inline-block mx-2 col-md-5 col-lg-2">
                    <input type="radio" name="opcion" id="semana" onClick={()=>seleccionarOpcion('semana')}/>
                    <label htmlFor="semana" >Ultima semana</label>
                </div>
                <div className="form-group d-inline-block mx-2 col-md-5 col-lg-2">
                    <input type="radio" name="opcion" id="mes" onClick={()=>seleccionarOpcion('mes')}/>
                    <label htmlFor="mes" >Ultimo mes</label>
                </div>
                <div className="form-group d-inline-block mx-2 col-md-5 col-lg-2">
                    <input type="radio" name="opcion" id="anio" onClick={()=>seleccionarOpcion('anio')}/>
                    <label htmlFor="anio" >Ultimo año</label>
                </div>  
                <div className="form-group d-inline-block mx-2 col-md-5 col-lg-2">
                    <input type="radio" name="opcion" id="rango" onClick={()=>seleccionarOpcion('rango')}/>
                    <label htmlFor="rango" >Rango de fechas</label>
                </div>
                {opcion==='rango'?<FormularioRango seleccionarFechaInicial={setFechaInicial} seleccionarFechaFinal={setFechaFinal}/>:<></>}
                <button onClick={handleClick} className="d-block btn btn-success">Aceptar</button>
            </form>
            
            
        </div>
    )
}
export default MenuOpciones