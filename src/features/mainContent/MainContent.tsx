import React from 'react';
import { v4 } from 'uuid';
import { useAppSelector, useAppDispatch } from '../../app/hooks';

import SectionPanel from '../sectionPanelModule/SectionPanel';
import './MainContentStyle.scss';

import { getInitialData } from '../../logic/editorSlice';
import { EditorType } from '../../logic/editorTypes';

const MainContent = () => {
    const initialData: EditorType[] = useAppSelector(getInitialData);
    const renderItems = () => initialData.map(section => {
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
