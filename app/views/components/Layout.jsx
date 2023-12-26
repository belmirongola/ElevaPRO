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
            <Dashboard />
        )
    }
}

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Sidebar content goes here */}
      Sidebar
      <p>Sidebar</p>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      {/* Content goes here */}
      Content
    
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <Content />
    </div>
  );
};

export default LayoutTest;