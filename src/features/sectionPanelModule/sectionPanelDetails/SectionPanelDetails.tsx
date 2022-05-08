import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';

import { ColumnDetailsType } from '../../../logic/editorTypes';
import './SectionPanelDetails.scss';
import SectionPanelIcons from "./SectionPanelIcons/SectionPanelIcons";

import { saveIcon } from '../../../logic/editorSlice';
import { generatedIcons } from '../../../helpers/iconsHelper';

const SectionPanelDetails = ({
    icon,
    title,
    subtitle,
    columnIndex,
    isDisabled,
    handleRowDetailsChange,
    id,
}: ColumnDetailsType) => {
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const dispatch = useAppDispatch();

    const renderIcon = (iconName) => {
        const elem = generatedIcons.filter(([name]) => name === iconName);
        return elem.map(([name, Icon]) => {
            return (
                <div
                    key={name}
                    className="icons-popup__icon"
                    data-name={name}
                    onClick={() => {
                        if (isDisabled) {
                            return;
                        }
                        setPopupVisibility(true)
                }}>
                    <Icon />
                </div>
            )
        });
    };

    const handleIconChange = (changedIcon) => {
        dispatch(saveIcon({
            id,
            columnIndex,
            changedIcon,
        }));
        setPopupVisibility(false);
    };

    return (
        <div className="section-panel-details">
            <SectionPanelIcons
                handleIconChange={handleIconChange}
                columnIndex={columnIndex}
                isPopupVisible={isPopupVisible}
            />
            {renderIcon(icon)}
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
    )
}

export default SectionPanelDetails;
