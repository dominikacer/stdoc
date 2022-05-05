import React from 'react';
import { v4 } from 'uuid';
import { MdEdit, MdDeleteForever } from "react-icons/md";
import { useAppDispatch } from '../../app/hooks';

import './SectionPanelStyle.scss';

import SectionPanelDetails from './sectionPanelDetails/SectionPanelDetails';
import PrimaryInput from '../componentsModule/PrimaryInput/PrimaryInput';

import { EditorType } from '../../logic/editorTypes'
import { handleElementsChange } from '../../logic/editorSlice';

const SectionPanel = ({
    sectionTitle,
    items,
    index,
}: EditorType) => {
    const dispatch = useAppDispatch();
    // const handleChangeTest = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     const { name,value } = e.target;
    //     dispatch(handleElementsChange({
    //         value,
    //         name,
    //         index,
    //     }));
    // };
    const renderItems = () => items.map(item => {
        return (
            <SectionPanelDetails
                key={v4()}
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                index={index}
            />
        )
    });
    return (
      <div className="section-panel">
          <PrimaryInput
              isDisabled={false}
              handleChangeAction={(e: React.ChangeEvent<HTMLInputElement>) => dispatch(handleElementsChange({
                  value: e.target.value,
                  name: e.target.name,
                  index,
              }))}
              additionalClassName="section-panel__title"
              value={sectionTitle}
              type="text"
              name="sectionTitle"
          />
          <div className="section-panel__content">
              {renderItems()}
          </div>
          <div className="section-panel__buttons">
              <MdEdit
                  className="section-panel__single-button"
              />
              <MdDeleteForever
                  className="section-panel__single-button"
              />
          </div>
      </div>
    )
};

export default SectionPanel;
