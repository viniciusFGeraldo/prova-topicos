export interface Tarefa{
    tarefaId?: string;
    titulo: string;
    descricao: string;
    categoriaId?: number;
    criadoEm?: Date;
    status?: string;

}