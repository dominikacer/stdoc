import React, {useRef} from 'react';
import Pdf from 'react-to-pdf';
import { MdPictureAsPdf } from "react-icons/md";
import { useAppSelector } from '../../app/hooks';

import SectionPanel from '../sectionPanelModule/SectionPanel';

import './MainContentStyle.scss';

import { getInitialData } from '../../logic/editorSlice';
import { EditorType } from '../../logic/editorTypes';

const MainContent = () => {
    const initialData: EditorType[] = useAppSelector(getInitialData);
    const pageRef = useRef<HTMLInputElement>(null);
    const renderItems = () => initialData.map((section) => {
        return (
            <SectionPanel
                key={section.id}
                sectionTitle={section.sectionTitle}
                items={section.items}
                id={section.id}
            />
        )
    });

    return (
        <>
            <div className="pdf-wrapper">
                <Pdf
                    filename="sample-presentation.pdf"
                    targetRef={pageRef}
                    scale={0.5}
                    y={.5}
                >
                    {({ toPdf }: any) => <button onClick={toPdf}>
                        <MdPictureAsPdf />
                    </button>}
                </Pdf>
            </div>
            <div
                className="main-content layout__main-content"
                ref={pageRef}
            >
                {renderItems()}
            </div>
        </>
    )
};

export default MainContent;
