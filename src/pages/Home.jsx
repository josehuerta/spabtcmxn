import React from 'react'

import Encabezado from '../components/Encabezado'
import Presentacion from '../components/Home/Presentacion'


const Home=()=>{
    return(
        <>
         <Encabezado isHome={true}/>
         <Presentacion/>
        </>
    )
}
export default Home