import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { v4 } from 'uuid';

import { EditorType, SaveContentType, EditValueType } from './editorTypes';
import { initialData } from './initialData';

const initialState: EditorType[] = [
    initialData,
];

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        addNewSection: (state) => {
            const initialDataCopy = Object.assign({},initialData);
            initialDataCopy.id = v4();
            state.push(initialDataCopy);
        },
        editSection: (state, action: PayloadAction<EditValueType>) => {
            const currentElement = state.find(el => el.id === action.payload.id);
            if (currentElement) {
                currentElement.isDisabled = !action.payload.isDisabled;
            }

        },
        deleteSection: (state, action: PayloadAction<string>) => {
            return state.filter(el => el.id === action.payload);
        },
        saveSection: (state, action: PayloadAction<SaveContentType>) => {
            let currentElement = state.find(el => el.id === action.payload.id);
            if (currentElement) {
                currentElement = action.payload.value;
            }
        },
        removeAllSections: (state) => {
            state.length = 1;
        }
    },
});

export const {
    addNewSection, removeAllSections, saveSection, editSection, deleteSection
} = editorSlice.actions;
export const getInitialData = (state: RootState) => state.editor;
export default editorSlice.reducer;
