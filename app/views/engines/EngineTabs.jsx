import React, { useState, Component } from 'react';
import { Link } from "react-router-dom"
import Icon from '../components/default/Icon.jsx'

function EngineTabs({state, current}) {
    return (
        <div className='engine-tabs'>
            <h1>Imagens</h1>
            <br/>
            <ul className='center'>
                <EngineTab link='/apps' icon='picture' id={current}/>
                <EngineTab link='/text' icon='text' id={current}/>
                <EngineTab link='/docs' icon='document' id={current}/>
            </ul>
        </div>
    )
}

function EngineTab ({state, link, icon, id}) {
    if (id == icon) id = 'selected';

    return (
        <li id={id}>
            <Link to={link}>
            <i className={'fi fi-sr-' + icon}></i>
            </Link>
        </li>
    )
}

export default EngineTabs;