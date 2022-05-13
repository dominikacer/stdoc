import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { v4 } from 'uuid';

import { EditorType } from './editorTypes';
import { initialData } from './initialData';
import ColumnPropertiesEnum  from '../enums/ColumnPropertiesEnum';

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
        deleteSection: (state, action: PayloadAction<string>) => {
            return state.filter(el => el.id !== action.payload);
        },
        saveIcon: (state, action) => {
            const currentElement = state.find(el => el.id === action.payload.id);
            if (currentElement) {
                currentElement.items[action.payload.columnIndex].icon = action.payload.changedIcon
            }
        },
        removeAllSections: (state) => {
            state.length = 0;
        },
        saveInputValue: (state, action) => {
            const currentElement = state.find(el => el.id === action.payload.id);
            if (currentElement) {
                switch (action.payload.type) {
                    case ColumnPropertiesEnum.sectionTitle:
                        currentElement.sectionTitle = action.payload.value;
                        break;
                    case ColumnPropertiesEnum.title:
                        currentElement.items[action.payload.columnIndex].title = action.payload.value;
                        break;
                    case ColumnPropertiesEnum.subtitle:
                        currentElement.items[action.payload.columnIndex].subtitle = action.payload.value;
                        break;
                    default:
                        break;
                }
            }
        },
    },
});

export const {
    addNewSection,
    removeAllSections,
    deleteSection,
    saveIcon,
    saveInputValue,
} = editorSlice.actions;
export const getInitialData = (state: RootState) => state.editor;
export default editorSlice.reducer;
