export interface User {
  id: number,
  email: string,
  name: string,
  tipo: userTipo.USER,
  password: string
}

export enum userTipo {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER'
}
