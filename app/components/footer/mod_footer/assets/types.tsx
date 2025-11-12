export type FooterLinkType = {
    title: string,
    url: string
}

export type FooterColumnType = {
    header: string,
    body: FooterLinkType[]
}

export interface FooterColumnData {
    data: FooterColumnType
}