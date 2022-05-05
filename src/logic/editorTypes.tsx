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

export interface SectionTitleInputType {
    value: string,
    index: number,
}

export interface EditValueType {
    index: number,
    isDisabled: boolean,
}

export interface ItemsType {
    items: Array<EditorDetailsType>,
    sectionIndex?: number,
}
