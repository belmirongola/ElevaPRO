import React, { useState, Component } from 'react';
import { useLocation, Navigate } from 'react-router-dom';


function Auth ({ children, state }) {
    let location = useLocation();

    if (state) return <Navigate to='/' state={{ from: location }} replace />

    return children;
}

export default Auth;