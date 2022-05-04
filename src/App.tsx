import React from 'react';
import logo from '../src/images/logo.png';
import './App.scss';

export const App = () => (
    <div className="App">
        <header className="App__header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
    </div>
);
