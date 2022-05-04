import React from 'react';
import logo from "../../images/logo.png";

import './HeaderStyles.scss';

const Header = () => (
    <header className="header layout__header">
        <img src={logo} className="header__logo" alt="logo" />
    </header>
);

export default Header;
