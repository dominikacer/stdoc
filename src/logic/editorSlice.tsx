import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

import { EditorType, InputValueType } from './editorTypes';
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
            initialDataCopy.index = state.length;
            state.push(initialDataCopy)
        },
        editSection: (state, action: PayloadAction<number>) => {
            console.warn(action);
        },
        handleElementsChange: (state, action: PayloadAction<InputValueType>) => {
            state[action.payload.index].sectionTitle = action.payload.value;
        },
        removeAllSections: (state) => {
            state.length = 1;
        }
    },
});

export const { addNewSection, removeAllSections, handleElementsChange } = editorSlice.actions;
export const getInitialData = (state: RootState) => state.editor;
export default editorSlice.reducer;
