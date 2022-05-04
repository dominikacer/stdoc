import React from 'react';
import { v4 } from 'uuid';

import SectionPanel from '../sectionPanelModule/SectionPanel';
import './MainContentStyle.scss';
import { temporaryData } from './temporaryData';

const MainContent = () => {
    const renderItems = () => temporaryData.map(section => {
        return (
            <SectionPanel
                key={v4()}
                sectionTitle={section.sectionTitle}
                items={section.items}
            />
        )
    });
    return (
        <div className="main-content layout__main-content">
            {renderItems()}
        </div>
    )
};

export default MainContent;
