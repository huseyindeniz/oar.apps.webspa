import { Catalog, CatalogList } from './Catalog';

const catalog1: Catalog = {
    Title: 'Title of Item',
    Creator: null,
    Subject: null,
    Description: 'Description of item',
    Publisher: 'Publisher of item',
    Contributer: null,
    Date: null,
    Type: null,
    Format: null,
    Identifier: 'Identifier of item',
    Source: 'Source of item',
    Language: null,
    Relation: ['relation 1', 'relation 2'],
    Coverage: 'Coverage of item',
    Rights: 'Rights of item'    
}

const dummyCatalogList: CatalogList = {
    data: [ catalog1 ]
}

export default dummyCatalogList;