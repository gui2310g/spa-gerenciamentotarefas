export interface User {
  id: number,
  email: string,
  name: string,
  tipo: userTipo,
  password: string
}

enum userTipo {
  ADMIN,
  USER
}
