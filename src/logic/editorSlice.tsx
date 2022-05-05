import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';

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
            initialDataCopy.index = state.length;
            state.push(initialDataCopy)
        },
        editSection: (state, action: PayloadAction<EditValueType>) => {
            state[action.payload.index].isDisabled = !action.payload.isDisabled;
        },
        deleteSection: (state, action: PayloadAction<number>) => {
            if (state.length > 1) {
                state.splice(action.payload, 1);
            }
        },
        saveSection: (state, action: PayloadAction<SaveContentType>) => {
            state[action.payload.index] = action.payload.value;
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
