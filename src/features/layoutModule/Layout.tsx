import React from 'react';

import Header from '../headerModule/Header';
import SideBar from '../sidebarModule/SideBar';
import MainContent from '../mainContent/MainContent';

import './LayoutStyles.scss';

export const Layout = () => (
    <div className="layout">
        <Header />
        <SideBar />
        <MainContent />
    </div>
);

export default Layout;
