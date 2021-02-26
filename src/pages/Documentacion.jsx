import React from 'react'

import DescripcionComponente from '../components/Documentacion/DescripcionComponente'

const componentes=[
    {
        nombre:"Encabezado",
        descripcion:"Componente que sirve a modo de encabezado de la aplicacion",
        propiedades:[{
            nombre:"isHome",
            tipo:"boolean",
            descripcion:"Propiedad para validar si si uno se encuentra en la pagina de home",
            valorDefault:"true"
        }]
    },
    {
        nombre:"Presentacion",
        descripcion:"Componente para mostrar las funcionalidades que puede realizar la aplicacion",
        propiedades:[{
            nombre:"",
            tipo:"",
            descripcion:"",
            valorDefault:""
        }]
    },
    {
        nombre:"Tarea",
        descripcion:"Componente para mostrar el titulo de la funcionalidad y una descripcion de ello",
        propiedades:[{
            nombre:"titulo",
            tipo:"string",
            descripcion:"titulo de la funcionalidad",
            valorDefault:"' '"
        },
        {
            nombre:"descripcion",
            tipo:"string",
            descripcion:"descripcion de la funcionalidad",
            valorDefault:"' '"
        } 
        ]
    },
    {
        nombre:"Error",
        descripcion:"Componente para mostrar un mensaje de error amigable cuando el usuario busque un recurso que la aplicacion no tiene",
        propiedades:[{
            nombre:"",
            tipo:"",
            descripcion:"",
            valorDefault:""
        }]
    },
    {
        nombre:"Operacion",
        descripcion:"Componente en donde se ejecutan las operaciones acerca del precio del bitcoin en moneda mexicana",
        propiedades:[{
            nombre:"",
            tipo:"",
            descripcion:"",
            valorDefault:""
        }]
    },
    {
        nombre:"MenuOpciones",
        descripcion:"Menu que muestra las opciones de las funcionalidades que puede ejecutar la aplicacion",
        propiedades:[{
            nombre:"opcion",
            tipo:"string",
            descripcion:"opcion seleccionada por el usuario para el rango de precios que desea conocer",
            valorDefault:"' '"
        },
        {
            nombre:"seleccionarOpcion",
            tipo:"metodo",
            descripcion:"metodo para conocer la opcion que fue seleccionada por el usuario",
            valorDefault:"' '"
        },
        {
            nombre:"obtenerResultado",
            tipo:"metodo",
            descripcion:"metodo para conocer el resultado del tipo de rango de precios que el usuario desea conocer",
            valorDefault:"' '"
        }
        ]
    },
    {
        nombre:"Resultado",
        descripcion:"Componente para mostrar los resultados de una peticion que haya hecho el usuario previamente",
        propiedades:[{
            nombre:"valores",
            tipo:"array",
            descripcion:"valores del resultado de la peticion hecha por el usuario",
            valorDefault:"[ ]"
        }]
    },
    {
        nombre:"Registro",
        descripcion:"Componente para mostar cada uno de los registros obtenidos de la peticion del usuario",
        propiedades:[{
            nombre:"fecha",
            tipo:"",
            descripcion:"fecha en que se ejecuto la transaccion del bitcon",
            valorDefault:"' '"
        },
        {
            nombre:"precioMax",
            tipo:"string",
            descripcion:"precio maximo en que se vendio el bitcoin dada esa fecha",
            valorDefault:"' '"
        },
        {
            nombre:"precioMin",
            tipo:"string",
            descripcion:"precio minimo en que se vendio el bitcoin dada esa fecha",
            valorDefault:"' '"
        }
        ]
    },


]
const Documentacion=()=>{

    return(
        <>  
            <h2 className="ml-5">Documentacion de componentes:</h2>
            {
            componentes.map((componente,i)=>{
                const{nombre,descripcion,propiedades}=componente
                
                return(
                    <DescripcionComponente key={i} titulo={nombre} descripcion={descripcion} propiedades={propiedades}/>
                )
            })
            }
        </>
    )
}
export default Documentacion