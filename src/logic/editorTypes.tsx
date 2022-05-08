export interface EditorDetailsType {
    icon: string,
    title: string,
    subtitle: string,
}

export interface ColumnDetailsType extends EditorDetailsType {
    isDisabled: boolean,
    columnIndex: number,
    handleRowDetailsChange: Function,
    id: string,
}

export interface EditorType {
    sectionTitle: string,
    items: EditorDetailsType[],
    isDisabled: boolean,
    id: string,
}

export interface EditValueType {
    id: string,
    isDisabled: boolean,
}

export interface SaveContentType {
    id: string,
    value: EditorType
}

export interface SectionPanelButtonsType {
    isDisabled: boolean,
    handleEdit: () => void,
    handleSave: () => void,
    handleDelete: () => void,
    handleOrder: (order: number) => void,
}
