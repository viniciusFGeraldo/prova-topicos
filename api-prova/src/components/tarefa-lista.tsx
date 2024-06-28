import { useEffect, useState } from "react";
import { Tarefa } from "../models/Tarefa";
import { format } from 'date-fns';
import axios from "axios";

function TarefaListar() {
    const [tarefa, setTarefa] = useState<Tarefa[]>([]);

    useEffect(() => {
        carregarTarefa();
    }, []);

    function carregarTarefa() {
        fetch("http://localhost:5000/tarefas/listar")
            .then((resposta) => resposta.json())
            .then((tarefas: Tarefa[]) => {
                setTarefa(tarefas);
            });
    }
            

    return (
        <div className="d-flex vh-100">
            <div className="container my-auto text-center">
            <h2>Lista de tarefas</h2>
                <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover mt-2">
                        <thead>
                            <tr className="table">
                                <th>Código</th>
                                <th>titulo</th>
                                <th>descricao</th>
                                <th>categoriaId</th>
                                <th>Criado Em</th>
                                <th>status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tarefa.map(tarefa => (
                                <tr key={tarefa.tarefaId}>
                                    <td>{tarefa.tarefaId}</td>
                                    <td>{tarefa.titulo}</td>
                                    <td>{tarefa.descricao}</td>
                                    <td>{tarefa.categoriaId}</td>
                                    <td>{tarefa.criadoEm ? format(new Date(tarefa.criadoEm), 'dd/MM/yyyy') : 'N/A'}</td>
                                    <td>{tarefa.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TarefaListar;