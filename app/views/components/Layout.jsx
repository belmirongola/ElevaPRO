import React, { Component } from "react"
import { Outlet } from "react-router-dom"
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


import Header from './header/Header.jsx';

class Layout extends Component {
    constructor (props) {
        super(props);

        this.utils = props.utils;
    }
    render () {
        return (
            <article id="app">
                <Header/>
                <section>
                    <Outlet/>
                </section>
            </article>
        );
    }
}

class LayoutTest extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Sidebar>
                <Menu>
                <SubMenu label="Charts">
                    <MenuItem> Pie charts </MenuItem>
                    <MenuItem> Line charts </MenuItem>
                </SubMenu>
                <MenuItem> Documentation </MenuItem>
                <MenuItem> Calendar </MenuItem>
                </Menu>
          </Sidebar>
        )
    }
}

export default LayoutTest;