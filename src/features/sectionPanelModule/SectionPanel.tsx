import React from 'react';
import { v4 } from 'uuid';

import SectionPanelDetails from './sectionPanelDetails/SectionPanelDetails';
import { SectionPanelType } from './SectionPanelType'

import './SectionPanelStyle.scss';

const SectionPanel = ({
    sectionTitle,
    items,
}: SectionPanelType) => {
    const renderItems = () => items.map(item => {
        return (
            <SectionPanelDetails
                key={v4()}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
            />
        )
    });
    return (
      <div className="section-panel">
          <div className="section-panel__title">{sectionTitle}</div>
          <div className="section-panel__content">
              {renderItems()}
          </div>
      </div>
    )
};

export default SectionPanel;
