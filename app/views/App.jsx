'use strict';

import React, { Component,  useState } from 'react'
import { render } from 'react-dom'
import { createBrowserHistory as history} from 'history'
import { Routes, 
         Route, 
         BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import * as io from 'socket.io-client'
import store from '../assets/scripts/redux/store'

import '../assets/style/css/all.css'
import '../assets/style/css/uicons-regular-rounded.css'
import '../assets/style/css/bootstrap.css';
import '../assets/style/css/app.css'
import '../assets/style/css/comps/menu.css'

import Layout from './components/Layout.jsx'
import Auth from './components/handler/auth.jsx'
import Home from './components/pages/Home.jsx'
import Engines from './engines/Engines.jsx'
import ImagesEngine from './engines/Images.jsx'
import TextEngeine from './engines/Text.jsx'
import DocsEngine from './engines/Docs.jsx'

const root = document.getElementById('root');

class App extends Component {
    render () {
        return (
        <Router history={history}>
            <Routes>
                <Route element={<Layout/>}>
                    <Route path='/' element={<Engines/>}></Route>
                    <Route element={<Engines/>}>
                        <Route path='apps' element={<ImagesEngine/>}></Route>
                        <Route path='text' element={<TextEngeine/>}></Route>
                        <Route path='docs' element={<DocsEngine/>}></Route>
                    </Route>
                </Route>
            </Routes>
        </Router>
        )
    }
}

render(
    <React.StrictMode>
        <Provider store={store}> 
            <App/> 
        </Provider>
    </React.StrictMode>, root);