import React from 'react';
import classNames from 'classnames';

import './SectionPanelIconsStyle.scss';

import { generatedIcons } from '../../../../helpers/iconsHelper';

const SectionPanelIcons = ({
    handleIconChange,
    columnIndex,
    isPopupVisible,
}) => {

    const renderIcons = () => {
        return generatedIcons.map(([name, Icon]) => {
            return (
                <div
                    key={name}
                    className="icons-popup__icon"
                    data-name={name}
                    onClick={() => handleIconChange(name, columnIndex)}>
                        <Icon />
                </div>
            )
        })};

    return (
        <div className={classNames('icons-popup', {
            'icons-popup--is-visible': isPopupVisible,
        })}>
            {renderIcons()}
        </div>
    )
};

export default SectionPanelIcons;
