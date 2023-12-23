import React, { useState, Component } from 'react';
import EngineTabs from './EngineTabs.jsx'

class TextEngine extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <>
            <div className='engine-bar'>
                <EngineTabs current='text' />
                <Engine />
            </div>

            <div className='engine-dashboard'>
                Dashboard
            </div>
            </>
        )
    }
}

function Engine() {
    return (
        <h1>Hello Text</h1>
    );
}

export default TextEngine;