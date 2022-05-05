import React from 'react';

import { PrimaryInputType } from './PrimaryInputType';
import './PrimaryInput.scss';


const PrimaryInput = ({
    value,
    handleChangeAction,
    isDisabled,
    type,
    additionalClassName,
    name,
} : PrimaryInputType) => {
    return (
        <>
            <input
                value={value}
                onChange={handleChangeAction}
                type={type}
                disabled={isDisabled}
                autoComplete="off"
                className={additionalClassName}
                name={name}
            />
        </>
    );
};

export default PrimaryInput;
