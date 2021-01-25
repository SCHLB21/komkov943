export interface MyProduct {
  id: number;
  name: string;
  number: number;
  status: boolean;
  edit: boolean;
}

export interface MyNewProduct {
  id?: number;
  name: string;
  number: number;
  status: boolean;
  edit: boolean;
}
