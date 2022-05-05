import React from 'react';

import { ColumnDetailsType } from '../../../logic/editorTypes';
import './SectionPanelDetails.scss';

const SectionPanelDetails = ({
    icon,
    title,
    subtitle,
    columnIndex,
    isDisabled,
    handleRowDetailsChange,
}: ColumnDetailsType) => (
    <div className="section-panel-details">
        <input
            className="section-panel-details__input section-panel-details__icon"
            name="icon"
            type="text"
            defaultValue={icon}
            disabled={isDisabled}
            onChange={(e) => handleRowDetailsChange(e, columnIndex)}
        />
        <input
            className="section-panel-details__input section-panel-details__title"
            name="title"
            type="text"
            defaultValue={title}
            disabled={isDisabled}
            onChange={(e) => handleRowDetailsChange(e, columnIndex)}
        />
        <input
            className="section-panel-details__input section-panel-details__subtitle"
            name="subtitle"
            type="text"
            defaultValue={subtitle}
            disabled={isDisabled}
            onChange={(e) => handleRowDetailsChange(e, columnIndex)}
        />
    </div>
);

export default SectionPanelDetails;
