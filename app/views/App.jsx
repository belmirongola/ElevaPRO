'use strict';

import React, { Component } from 'react'
import { createBrowserHistory as history} from 'history'

import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
//import * as io from 'socket.io-client'
import store from '../assets/scripts/redux/store'

import '../assets/style/css/all.css'
import '../assets/style/css/uicons-regular-rounded.css'
import '../assets/style/css/bootstrap.css';
import '../assets/style/css/app.css'
import '../assets/style/css/comps/menu.css'

//import AppRoutes from '../means/router';
import Layout from './components/Layout.jsx';

const root = createRoot(document.getElementById('root'));

class App extends Component {
    render () {
        return (
            <React.StrictMode>
                <Provider store={store}> 
                    <Layout />
                </Provider>
            </React.StrictMode>
    )}
}

root.render( <App/> );