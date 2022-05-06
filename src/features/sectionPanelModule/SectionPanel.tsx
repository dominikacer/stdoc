import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';

import PrimaryInput from '../componentsModule/PrimaryInput/PrimaryInput';
import SectionPanelDetails from './SectionPanelDetails/SectionPanelDetails';
import SectionPanelButtons from './SectionPanelButtons/SectionPanelButtons';
import './SectionPanelStyle.scss';

import { EditorType } from '../../logic/editorTypes'
import { saveSection, editSection, deleteSection } from '../../logic/editorSlice';
import ColumnPropertiesEnum  from '../../enums/ColumnPropertiesEnum';

const SectionPanel = ({
    sectionTitle,
    isDisabled,
    items,
    id,
}: EditorType) => {
    const dispatch = useAppDispatch();
    const [newObject, setNewObject] = useState({
        sectionTitle,
        items,
        isDisabled,
        id,
    });
    const [columnOrder, handleColumnOrder] = useState(123);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            id,
            isDisabled,
        }))
    };

    const handleSave = () => {
        dispatch(saveSection({
            id,
            value: newObject,
        }));
        dispatch(editSection({
            id,
            isDisabled,
        }))
    };

    const handleDelete = () => {
        dispatch(deleteSection(id))
    };

    const handleOrder = (orderData: number) => {
        handleColumnOrder(orderData)
    };


    return (
      <div className="section-panel">
          <PrimaryInput
              isDisabled={isDisabled}
              handleChangeAction={handleTitleChange}
              additionalClassName="section-panel__title"
              value={newObject.sectionTitle}
              type="text"
              name="sectionTitle"
          />
          <div className={`section-panel__content section-panel__content--${columnOrder}`}>
              {items.map((item, columnIndex) => {
                  return (
                      <SectionPanelDetails
                          key={`${id}-${columnIndex}`}
                          icon={item.icon}
                          title={item.title}
                          subtitle={item.subtitle}
                          columnIndex={columnIndex}
                          isDisabled={isDisabled}
                          handleRowDetailsChange={handleRowDetailsChange}
                      />
                  )
              })}
          </div>
          <SectionPanelButtons
              handleEdit={handleEdit}
              handleSave={handleSave}
              handleDelete={handleDelete}
              handleOrder={handleOrder}
              isDisabled={isDisabled}
          />
      </div>
    )
};

export default SectionPanel;
