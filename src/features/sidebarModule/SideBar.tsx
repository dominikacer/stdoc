import React, { useId } from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';

import Button from "../componentsModule/Button/Button";
import './SideBarStyles.scss';

import { addNewSection, removeAllSections } from '../../logic/editorSlice';

const SideBar = () => {
    const addButtonId = useId();
    const removeButtonId = useId();
    const dispatch = useAppDispatch();
    return (
        <div className="sidebar layout__sidebar">
            <Button
                id={addButtonId}
                onClick={() => dispatch(addNewSection())}
                className="button--primary"
                isDisabled={false}
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
