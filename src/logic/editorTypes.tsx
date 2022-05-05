export interface EditorDetailsType {
    icon: string,
    title: string,
    subtitle: string,
    index?: number,
}

export interface EditorType {
    sectionTitle: string,
    items: EditorDetailsType[],
    index: number,
}

export interface InputValueType {
    value: string,
    name: string,
    index: number,
}
