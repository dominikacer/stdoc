import React, { useState } from 'react';
import { MdEdit, MdDeleteForever, MdSave } from "react-icons/md";
import { useAppDispatch } from '../../app/hooks';

import PrimaryInput from '../componentsModule/PrimaryInput/PrimaryInput';
import SectionPanelDetails from './SectionPanelDetails/SectionPanelDetails';
import './SectionPanelStyle.scss';

import { EditorType } from '../../logic/editorTypes'
import { saveSection, editSection, deleteSection } from '../../logic/editorSlice';
import ColumnPropertiesEnum  from '../../enums/ColumnPropertiesEnum';

const SectionPanel = ({
    sectionTitle,
    index,
    isDisabled,
    items,
}: EditorType) => {
    const dispatch = useAppDispatch();
    const [newObject, setNewObject] = useState({
        sectionTitle,
        items,
        index,
        isDisabled,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewObject({
            ...newObject,
            sectionTitle: e.target.value,
        })
    };
    const handleRowDetailsChange = (e: React.ChangeEvent<HTMLInputElement>, cIndex: number) => {
        const shallowCopyObj = JSON.parse(JSON.stringify(newObject));
        const targetName = e.target.name;
        const targetValue = e.target.value;
        if (targetName === ColumnPropertiesEnum.icon) {
            shallowCopyObj.items[cIndex].icon = targetValue;
        }
        if (targetName === ColumnPropertiesEnum.title) {
            shallowCopyObj.items[cIndex].title = targetValue;
        }
        if (targetName === ColumnPropertiesEnum.subtitle) {
            shallowCopyObj.items[cIndex].subtitle = targetValue;
        }
        setNewObject(shallowCopyObj);
    };

    const handleEdit = () => {
        dispatch(editSection({
            index,
            isDisabled,
        }))
    };

    const handleSave = () => {
        dispatch(saveSection({
            index,
            value: newObject,
        }));
        dispatch(editSection({
            index,
            isDisabled,
        }))
    };

    const handleDelete = () => {
        dispatch(deleteSection(index))
    };

    const renderItems = () => items.map((item, columnIndex) => {
        return (
            <SectionPanelDetails
                icon={item.icon}
                title={item.title}
                subtitle={item.subtitle}
                columnIndex={columnIndex}
                isDisabled={isDisabled}
                handleRowDetailsChange={handleRowDetailsChange}
            />
        )
    });

    return (
      <div className="section-panel">
          <PrimaryInput
              isDisabled={isDisabled}
              handleChangeAction={handleChange}
              additionalClassName="section-panel__title"
              value={newObject.sectionTitle}
              type="text"
              name="sectionTitle"
          />
          <div className="section-panel__content">
              {renderItems()}
          </div>
          <div className="section-panel__buttons">
              {isDisabled && (
                  <MdEdit
                      className="section-panel__single-button"
                      onClick={handleEdit}
                  />
              )}
              {!isDisabled && (
                  <MdSave
                      className="section-panel__single-button"
                      onClick={handleSave}
                  />
              )}
              <MdDeleteForever
                  className="section-panel__single-button"
                  onClick={handleDelete}
              />
          </div>
      </div>
    )
};

export default SectionPanel;
