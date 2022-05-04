export interface EditorDetailsType {
    icon: string,
    title: string,
    subtitle: string,
}

export interface EditorType {
    sectionTitle: string,
    items: EditorDetailsType[],
}
