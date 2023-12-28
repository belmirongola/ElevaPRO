import React, { Component, useState } from "react"
import { Outlet } from "react-router-dom"

import Sidebar from './components/menu/Sidebar.jsx'
import Section from './components/pages/SectionBar.jsx';

class Layout extends Component {
    constructor (props) {
        super(props);

        this.props = props;
        this.utils = props.utils;
        this.state = {
            menu: {
                collapsed: false,
                setCollapsed: this.setCollapsed
            }
        }

        this.setCollapsed = this.setCollapsed.bind(this);
    }

    setCollapsed = () => {
        // Muda o estado de visibilidade do sidebar
        this.setState({
            menu: {
                collapsed: !this.state.menu.collapsed
            }
        })
    }

    render () {
        return (
        <article 
            className="dashboard"
            sx={{
                display: 'flex',
                height: '100%',
                minHeight: '400px'
            }}>
            
            <Sidebar 
                collapsed={ this.state.menu.collapsed }
                setCollapsed={ this.state.menu.setCollapsed }/>

            <Section 
                set={this.setCollapsed} 
                children={ <Outlet/> }/>
        </article>
        );
    }
}

export default Layout;