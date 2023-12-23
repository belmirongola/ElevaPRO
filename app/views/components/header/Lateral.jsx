import React, { useState, Component } from "react"
import { Link } from "react-router-dom"
import Icon from '../default/Icon.jsx';

class LateralMenu extends Component {
    constructor (props) {
        super(props);

        this.utils = props.utils;
    }

    render () {
        return (
            <aside id="lateral-menu">
                <div className="options">
                    <Icon name="menu-burger"/>
                </div>

                <div className="places">
                    <ul className="center">
                        <Item icon="users" link="/apps"/>
                        <Item icon="trophy" link="/apps"/>
                        <Item icon="chart-line-up" link="/apps"/>
                        <Item icon="cube" link="/apps"/>
                    </ul>
                </div>

                <div className="settings">
                    <Icon name="settings"/>
                </div>
            </aside>
        );
    }
}

function Item ({id, icon, state, link}) {
    return (
        <li id={id}>
            <Link to={link}>
                <Icon name={icon}/>
            </Link>
        </li>
    )
}

export default LateralMenu;