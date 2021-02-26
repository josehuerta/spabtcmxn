import React from 'react'
import {Link} from 'react-router-dom'
import bitcoinImg from '../images/bitcoin.png' 


const Encabezado=(props)=>{
    const {isHome}=props
    return (
        <div className="bg-dark py-2">
            <img src={bitcoinImg} alt="bitcoin img" className="img-fluid"/>
            <h2 className="d-inline-block text-white px-2">BTC a MXN</h2>
            <Link to='inicio'>
                {isHome?<button className="btn btn-success float-right mr-2 my-2 py-1 px-3">Ver informacion</button>:''}
            </Link>
        </div>
    )
}

export default Encabezado