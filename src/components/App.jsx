import React from 'react'
import {BrowserRouter, Route,Switch} from 'react-router-dom'

import Error from './Error/Error'
import Inicio from '../pages/Inicio'
import Home from '../pages/Home'
import Documentacion from '../pages/Documentacion'
import 'bootstrap/dist/css/bootstrap.css';

const App=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/inicio' component={Inicio} />
                <Route exact path='/documentacion' component={Documentacion} />
                <Route component={Error}/>
            </Switch>
            
        </BrowserRouter>
    )
}

export default App