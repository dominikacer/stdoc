import React from 'react';

import { EditorDetailsType } from '../../../logic/editorTypes';

import './SectionPanelDetailsStyle.scss';

const SectionPanelDetails = ({
    icon,
    title,
    subtitle,
    index,
} : EditorDetailsType) => (
    <div className="section-panel-details">
        <input
            className="section-panel-details__icon"
            value={icon}
        />
        <input
            className="section-panel-details__title"
            value={title}
        />
        <input
            className="section-panel-details__subtitle"
            value={subtitle}
        />
    </div>
);

export default SectionPanelDetails;
