import React, { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';

import PrimaryInput from '../componentsModule/PrimaryInput/PrimaryInput';
import SectionPanelDetails from './SectionPanelDetails/SectionPanelDetails';
import SectionPanelButtons from './SectionPanelButtons/SectionPanelButtons';

import './SectionPanelStyle.scss';

import { EditorType } from '../../logic/editorTypes'
import { deleteSection, saveInputValue } from '../../logic/editorSlice';

const SectionPanel = ({
    sectionTitle,
    items,
    id,
}: EditorType) => {
    const dispatch = useAppDispatch();
    const [columnOrder, handleColumnOrder] = useState(123);

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(saveInputValue({
            value: e.target.value,
            type: e.target.name,
            id,
        }));
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
              handleChangeAction={handleTitleChange}
              additionalClassName="section-panel__title"
              value={sectionTitle}
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
                          id={id}
                      />
                  )
              })}
          </div>
          <SectionPanelButtons
              handleDelete={handleDelete}
              handleOrder={handleOrder}
          />
      </div>
    )
};

export default SectionPanel;
