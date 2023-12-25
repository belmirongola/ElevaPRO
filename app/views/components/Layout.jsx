import React, { Component } from "react"
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

class LayoutTest extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
        <div className="app2">
            <div className="header">Header</div>
            <div className="container">
                <aside className="drawer">Drawer</aside>
                <main className="main">Content</main>
            </div>
            <div className="footer">Footer</div>
        </div>
        )
    }
}

export default Layout;