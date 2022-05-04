import React from 'react';

import Button from "../componentsModule/Button/Button";
import './SideBarStyles.scss';

const SideBar = () => (
    <div className="sidebar layout__sidebar">
        <Button
            id="test-id"
            onClick={() => console.warn('Temporary action')}
            className="button--primary"
        >
            Add section
        </Button>
    </div>
);

export default SideBar;
