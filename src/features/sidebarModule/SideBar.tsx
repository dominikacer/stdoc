import React, { useId } from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

import Button from "../componentsModule/Button/Button";
import './SideBarStyles.scss';

import {addNewSection, getInitialData, removeAllSections} from '../../logic/editorSlice';
import { EditorType } from "../../logic/editorTypes";

const SideBar = () => {
    const addButtonId = useId();
    const removeButtonId = useId();
    const dispatch = useAppDispatch();
    const initialData: EditorType[] = useAppSelector(getInitialData);
    const isEditingEnabled = initialData.some(el => !el.isDisabled);
    return (
        <div className="sidebar layout__sidebar">
            <Button
                id={addButtonId}
                onClick={() => dispatch(addNewSection())}
                className="button--primary"
                isDisabled={isEditingEnabled}
            >
                Add section
            </Button>
            <Button
                id={removeButtonId}
                onClick={() => dispatch(removeAllSections())}
                className="button--primary"
                isDisabled={false}
            >
                Remove all
            </Button>
        </div>
    )
}

export default SideBar;
