export interface EditorDetailsType {
    icon: string,
    title: string,
    subtitle: string,
}

export interface ColumnDetailsType extends EditorDetailsType {
    columnIndex: number,
    id: string,
}

export interface EditorType {
    sectionTitle: string,
    items: EditorDetailsType[],
    id: string,
}

export interface SectionPanelButtonsType {
    handleDelete: () => void,
    handleOrder: (order: number) => void,
}
