export interface Task {
  id: number,
  titulo: string,
  descricao: string,
  data: Date,
  status: tipoTask
}

export enum tipoTask {
  PENDENTE,
  CONCLUIDO
}
