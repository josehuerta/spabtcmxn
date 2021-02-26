// componente para mostrar la funcionalidad de cada 
// requerimiento
import React from 'react'
import Tarea from './Tarea'

const Tareas=[
    {   
        id:1,
        titulo:'Precio del bitcoin en las ultimas 24 horas',
        descripcion:'Conoce el precio que tuvo el bitcoin las ultimas 24 hrs'
    },
    {   
        id:2,
        titulo:'Precio del bitcoin en una semana',
        descripcion:'Conoce los precios que tuvo el bitcoin a lo largo de una semana'
    },
    {   id:3,
        titulo:'Precio del bitcoin en un mes',
        descripcion:'Conoce los precios que tuvo el bitcoin en un mes'
    },
    {
        id:4,
        titulo:'Precio del bitcoin en un anio',
        descripcion:'Conoce los precios que tuvo el bitcoin a lo largo de un anio'
    },
    {
        id:5,
        titulo:'Precio del bitcoin en un rango de fechas',
        descripcion:'Conoce los precios que tuvo el bitcoin en un rango de fechas'
    }


]
const Presentacion=()=>{
    return(
        <div className="bg-light row justify-content-center">
            {
                Tareas.map(tarea=>{
                    return <Tarea key={tarea.id} titulo={tarea.titulo} descripcion={tarea.descripcion}/>
                })
            }
        </div>
        
    )
}
export default Presentacion
