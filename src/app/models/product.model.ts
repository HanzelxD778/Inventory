export interface Category {
  id: number,
  name: string,
  isActive: boolean,
  isErased: false,
  dateCreated: string,
  lastModified?: string
}

export interface Product{
  id: number,
  name: string,
  cost: number,
  price: number,
  dateCreated: string,
  lastModified?: string,
  isActive: boolean,
  tagList: string[],
  idCategory: Category
}

export interface CreateProductDTO extends Omit<Product, 'id' | 'idCategory' | 'dateCreated' | 'lastModified' | 'isActive' | 'tagList'>{
  categoryId: number,
  tagsId: string[]
}

export interface UpdateProductDTO extends Partial<CreateProductDTO>{
  isActive?: boolean
}
