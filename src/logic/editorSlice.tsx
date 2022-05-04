import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

import { EditorType } from './editorTypes';
import { initialData } from './initialData';

const initialState: EditorType[] = [
    initialData,
];

export const editorSlice = createSlice({
    name: 'editor',
    initialState,
    reducers: {
        addNewSection: (state) => {
            state.push(initialData)
        },
        editSection: (state, action: PayloadAction<number>) => {
            console.warn(action);
        },
        removeAllSections: (state) => {
            state.length = 1;
        }
    },
});

export const { addNewSection, removeAllSections } = editorSlice.actions;
export const getInitialData = (state: RootState) => state.editor;
export default editorSlice.reducer;
