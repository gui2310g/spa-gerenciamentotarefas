export interface User {
  id: number,
  email: string,
  name: string,
  tipo: userTipo,
  password: string
}

export enum userTipo {
  ADMIN,
  USER
}
