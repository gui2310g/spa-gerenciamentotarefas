export interface Task {
  id: number,
  title: string,
  description: string,
  dueDate: Date,
  status: tipoTask
}

export enum tipoTask {
  PENDENTE = 'PENDENTE',
  CONCLUIDA = 'CONCLUIDA'
}
