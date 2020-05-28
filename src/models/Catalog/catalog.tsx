
export interface Contributer {

}

export interface Subject {

}

export interface Type {

}

export interface Format {

}

export interface Language {

}

export interface Catalog {
    Title: string,
    Creator: Contributer[] | null,
    Subject: Subject[] | null,
    Description: string,
    Publisher: string,
    Contributer: Contributer[] | null,
    Date: Date | null,
    Type: Type | null,
    Format: Format | null,
    Identifier: string,
    Source: string,
    Language: Language | null,
    Relation: string[],
    Coverage: string,
    Rights: string
}

export interface CatalogList {
    data: Catalog[] | null | undefined,
}