import React from 'react';

import { EditorDetailsType } from '../../../logic/editorTypes';

import './SectionPanelDetailsStyle.scss';

const SectionPanelDetails = ({
    icon,
    title,
    subtitle,
} : EditorDetailsType) => (
    <div className="section-panel-details">
        <div className="section-panel-details__icon">{icon}</div>
        <div className="section-panel-details__title">{title}</div>
        <div className="section-panel-details__subtitle">{subtitle}</div>
    </div>
);

export default SectionPanelDetails;
