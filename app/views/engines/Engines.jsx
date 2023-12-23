import React, { useState, Component } from 'react';
import { Link, Outlet } from "react-router-dom"
import Icon from '../components/default/Icon.jsx'

import '../../assets/style/css/comps/engines.css'

class Engines extends Component {
    constructor () {
        super();
    }

    render () {
        return (
             <>
                 <div id='engines' className='engines'>
                     <Outlet/>
                 </div>
             </>
        )
    }
}


export default Engines;