export interface category{
    name: string;
    metatitle: string;
    parentId: number | undefined;
    displayOrder: number;
    dateCreated: string;
    dateModified: string;
    status: boolean;
    pathImage: string;
    categoryDtos: category[];
}