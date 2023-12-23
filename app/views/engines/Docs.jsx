import React, { useState, Component } from 'react';
import EngineTabs from './EngineTabs.jsx'

class DocsEngine extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <>
            <div className='engine-bar'>
                <EngineTabs current='document' />
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
        <h1>Hello Docs</h1>
    );
}

export default DocsEngine;