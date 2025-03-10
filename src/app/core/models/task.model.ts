export interface Task {
  id: number,
  titulo: string,
  descricao: string,
  data: Date,
  status: tipoTask
}

enum tipoTask {
  PENDENTE,
  CONCLUIDO
}
