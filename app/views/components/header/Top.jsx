import React, { useState, Component } from 'react';
import Icon from '../default/Icon.jsx';

class TopMenu extends Component {
    constructor () {
        super();
    }

    render () {
        return (
            <menu id='top-menu'>
                <MenuHamburger />
                <Brand name='ElevaPRO' logo=''/>
                <SearchBox />
                <UserProfile name='Belmiro Ngola' work='Marketing' />
            </menu>
        )
    }
}
function UserProfile ({name, work}) {
    return (
        <div className='options'>
            <ul className='list-unstyled'>
                <li id="name">{name}</li>
                <li id="work">{work}</li>
            </ul>
            <div className="profile-icon">
                <Icon name='user'/>
            </div>
        </div>
    );
}

function Brand ({name, logo}) {
    return (
        <div className='brand'>{name}</div>
    );
}

function Item({className, id, icon, state}) {
    return (
        <li className={className} id={id}>
            <Icon name={icon}/>
        </li>
    );
}

function MenuHamburger ({state}) {
    return (
        <div className='alert-elements'>
            <ul className='list-unstyled center'>
                <Item id="menssages" icon="envelope"/>
                <Item id="notifications" icon="bell"/>
                <Item id="atualizations" icon="circle-dashed"/>
            </ul>
        </div>
    );
}

function SearchBox() {
    return (
        <div className='search-bar'>
            <button className='icon'>
                <Icon name="search"/>
            </button>

            <form>
                <input 
                    type="search" 
                    name="search" 
                    placeholder="Pesquisar..." />
            </form>
        </div>
    )
}

export default TopMenu;