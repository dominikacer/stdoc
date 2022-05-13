import React, { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';

import { ColumnDetailsType } from '../../../logic/editorTypes';
import './SectionPanelDetails.scss';
import SectionPanelIcons from "./SectionPanelIcons/SectionPanelIcons";
import PrimaryInput from '../../componentsModule/PrimaryInput/PrimaryInput';

import { saveIcon, saveInputValue } from '../../../logic/editorSlice';
import { generatedIcons } from '../../../helpers/iconsHelper';

const SectionPanelDetails = ({
    icon,
    title,
    subtitle,
    columnIndex,
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
                    onClick={() => setPopupVisibility(true)}
                >
                    <Icon />
                </div>
            )
        });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(saveInputValue({
            value: e.target.value,
            type: e.target.name,
            id,
            columnIndex,
        }));
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
            <PrimaryInput
                additionalClassName="section-panel-details__input section-panel-details__title"
                name="title"
                type="text"
                value={title}
                handleChangeAction={handleChange}
            />
            <PrimaryInput
                additionalClassName="section-panel-details__input section-panel-details__subtitle"
                name="subtitle"
                type="text"
                value={subtitle}
                handleChangeAction={handleChange}
            />
        </div>
    )
};

export default SectionPanelDetails;
