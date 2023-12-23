import React, { useState, Component } from "react"
import { Outlet } from "react-router-dom"

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

export default Layout;