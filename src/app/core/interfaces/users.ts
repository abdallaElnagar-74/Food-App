
export interface Users {
    id: number
    userName: string
    email: string
    country: string
    phoneNumber: string
    imagePath: any
    group: Group
    creationDate: string
    modificationDate: string
  }
  
  export interface Group {
    id: number
    name: string
    creationDate: string
    modificationDate: string
  }
  export interface Fav {
    id: number
    creationDate: string
    modificationDate: string
    recipe: Recipe
  }
  
  export interface Recipe {
    id: number
    name: string
    imagePath: string
    description: string
    price: number
    creationDate: string
    modificationDate: string
    category: any[]
    tag: Tag
  }
  
  export interface Tag {
    id: number
    name: string
    creationDate: string
    modificationDate: string
  }
  
  