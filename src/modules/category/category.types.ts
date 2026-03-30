export interface ICategory {
    name: string;
    description?: string;
    active: boolean;
    createAt?: string;
    updateAt?: string
}

export interface ICreateCategoryDTO{ //Data Transfer Object
    name: string;
    description?: string;
    active?: boolean;
}

export interface IUpdateCategoryDTO{
    name?: string;
    description?: string;
    active?: boolean;
}

