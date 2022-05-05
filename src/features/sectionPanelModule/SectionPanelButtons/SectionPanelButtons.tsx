import React from 'react';
import {MdDeleteForever, MdEdit, MdSave} from "react-icons/md";

import { SectionPanelButtonsType } from '../../../logic/editorTypes';
import './SectionPanelButtons.scss';

const SectionPanelButtons = ({
    isDisabled,
    handleEdit,
    handleSave,
    handleDelete,
    handleOrder,
 }: SectionPanelButtonsType) => {
    return (
        <div className="section-panel-buttons">
           <div className="section-panel-buttons__top-section">
               {isDisabled && (
                   <MdEdit
                       className="section-panel-buttons__top-section__button"
                       onClick={handleEdit}
                   />
               )}
               {!isDisabled && (
                   <MdSave
                       className="section-panel-buttons__top-section__button"
                       onClick={handleSave}
                   />
               )}
               <MdDeleteForever
                   className="section-panel-buttons__top-section__button"
                   onClick={handleDelete}
               />
           </div>
            <div className="section-panel-buttons__bottom-section">
                <h2 className="section-panel-buttons__bottom-section__title">Reorder ur stuff :)</h2>
                <button onClick={() => handleOrder(123)}>123</button>
                <button onClick={() => handleOrder(132)}>132</button>
                <button onClick={() => handleOrder(213)}>213</button>
                <button onClick={() => handleOrder(231)}>231</button>
                <button onClick={() => handleOrder(312)}>312</button>
                <button onClick={() => handleOrder(321)}>321</button>
            </div>
       </div>
    )
};

export default SectionPanelButtons;
