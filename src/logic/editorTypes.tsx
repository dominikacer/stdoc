import React from "react";

export interface EditorDetailsType {
    icon: string,
    title: string,
    subtitle: string,
}

export interface ColumnDetailsType extends EditorDetailsType {
    isDisabled: boolean,
    columnIndex: number,
    handleRowDetailsChange: Function,
}

export interface EditorType {
    sectionTitle: string,
    items: EditorDetailsType[],
    index: number,
    isDisabled: boolean,
}

export interface EditValueType {
    index: number,
    isDisabled: boolean,
}

export interface SaveContentType {
    index: number,
    value: EditorType
}

export interface SectionTitleInputType {
    value: string,
    index: number,
}

export interface SectionPanelButtonsType {
    isDisabled: boolean,
    handleEdit: () => void,
    handleSave: () => void,
    handleDelete: () => void,
    handleOrder: (order: number) => void,
}
