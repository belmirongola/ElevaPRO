import React, { useState, Component } from 'react';
import TopMenu from './Top.jsx'
import LateralMenu from './Lateral.jsx'


class Header extends Component {
    constructor () {
        super();
    }

    render () {
        return (
             <>
                 <TopMenu />
                 <LateralMenu />
             </>
        )
    }
}

export default Header;