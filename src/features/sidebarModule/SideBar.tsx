import React, { useId } from 'react';

import Button from "../componentsModule/Button/Button";
import './SideBarStyles.scss';

const SideBar = () => {
    const buttonId = useId();
    return (
        <div className="sidebar layout__sidebar">
            <Button
                id={buttonId}
                onClick={() => console.warn('Temporary action')}
                className="button--primary"
            >
                Add section
            </Button>
        </div>
    )
}

export default SideBar;
