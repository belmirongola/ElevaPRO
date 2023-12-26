import React, { Component } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from './menu/Sidebar.jsx'
import Section from './pages/SectionBar.jsx';

class Layout extends Component {
    constructor (props) {
        super(props);

        this.utils = props.utils;
    }
    render () {
        return (
        <article 
            className="dashboard"
            style={{
                display: 'flex',
                height: '100%',
                minHeight: '400px'
            }}>
            
            <Sidebar />
            <Section />
        </article>
        );
    }
}

export default Layout;