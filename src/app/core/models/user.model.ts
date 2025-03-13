export interface User {
  id?: number,
  email?: string,
  name?: string,
  status: userTipo,
  password?: string,
  token: string
}

export enum userTipo {
  ADMIN = 'ROLE_ADMIN',
  USER = 'ROLE_USER'
}
