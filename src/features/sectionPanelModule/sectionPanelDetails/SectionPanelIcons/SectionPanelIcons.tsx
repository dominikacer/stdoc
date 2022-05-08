import React from 'react';
import classNames from 'classnames';
import * as MaterialIcons from 'react-icons/md';

import './SectionPanelIconsStyle.scss';

const SectionPanelIcons = ({ handleIconChange, columnIndex, isPopupVisible }) => {
    const allIcons = Object.entries(MaterialIcons).slice(0, 100);
    return (
        <div className={classNames('icons-popup', {
            'icons-popup--is-visible': isPopupVisible,
        })}>
            {allIcons.map(([name, Icon]) => {
                return (
                    <div key={name} className="icons-popup__icon" data-name={name} onClick={() => handleIconChange(name, columnIndex)}>
                        <Icon />
                    </div>
                )
            })}
        </div>
    )
};

export default SectionPanelIcons;
