import React, { Component } from "react";
import { Routes, 
         Route, 
         BrowserRouter as Router } from 'react-router-dom';

import Layout from '../../views/Layout.jsx'
import Auth from '../../views/components/handler/auth.jsx'
import Home from '../../views/components/pages/Home.jsx'
import Engines from '../../views/engines/Engines.jsx'
import ImagesEngine from '../../views/engines/Images.jsx'
import TextEngeine from '../../views/engines/Text.jsx'
import DocsEngine from '../../views/engines/Docs.jsx'

export default function AppRoutes ({ history }) {
    return (
        <Router history={history}>
            <Routes>
                <Route element={ <Layout/> }>
                    <Route path='/' element={ <Engines/> }></Route>

                    <Route path='apps' element={ <ImagesEngine/> }></Route>
                    <Route path='text' element={ <TextEngeine/> }></Route>
                    <Route path='docs' element={ <DocsEngine/> }></Route>
                </Route>
            </Routes>
        </Router>
)}