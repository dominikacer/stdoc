import React from 'react';
import { v4 } from 'uuid';
import { useAppSelector } from '../../app/hooks';

import SectionPanel from '../sectionPanelModule/SectionPanel';

import './MainContentStyle.scss';

import { getInitialData } from '../../logic/editorSlice';
import { EditorType } from '../../logic/editorTypes';

const MainContent = () => {
    const initialData: EditorType[] = useAppSelector(getInitialData);

    const renderItems = () => initialData.map((section) => {
        return (
            <SectionPanel
                key={v4()}
                sectionTitle={section.sectionTitle}
                items={section.items}
                index={section.index}
                isDisabled={section.isDisabled}
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
