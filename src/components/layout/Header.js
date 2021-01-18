import React from 'react';
import {Link } from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1>Todo Application</h1>
            
            <Link style={linkStyle} to="/">Home</Link> |  <Link 
           style={linkStyle} to="/application">Application</Link>
        </header>
    )
}

const headerStyle={
    background: '#4A4A4A',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoratioin: 'none'
}

export default Header;