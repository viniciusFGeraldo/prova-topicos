import { useState } from "react";
import { Categoria } from '../models/Categoria';

import { Tarefa } from "../models/Tarefa";

function TarefaCadastrar() {
    const [titulo, setTitulo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [categoriaId, setCategoriaId] = useState<number>(0);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    function cadastrar(e: any){
        e.preventDefault();

        const novoTarefa : Tarefa = {
            titulo: titulo,
            descricao: descricao,
            categoriaId: categoriaId
        };

        fetch("http://localhost:5000/tarefas/cadastrar",
            {
                method : "POST",
                headers : {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(novoTarefa)
            })
                .then((resposta) => resposta.json())
                .then(() => {

                });
    };
    
    return (
        <div className="container w-50" style={{ marginTop: '8rem', backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '0.5rem'  }}>
            <div className="row justify-content-center">
                <div className="col-12">
                    <form onSubmit={cadastrar}>
                        <fieldset>
                            <legend className="mb-4 text-center" style={{ color: '#495057', whiteSpace: 'nowrap' }}>Cadastrar tarefa</legend>
                            <div className="mb-5">
                                <label className="form-label" style={{ color: '#161A26' }}>Titulo:</label>
                                <input type="text" value={titulo} className="form-control" onChange={(e: any) => setTitulo(e.target.value)} required />
                                
                            </div>
                            <div className="mb-3">
                                <label className="form-label" style={{ color: '#161A26' }}>Descrição:</label>
                                <input type="text" value={descricao} className="form-control" onChange={(e: any) => {setDescricao(e.target.value)}} required />
                                
                            </div>
                            <label>Categorias:</label>

                            <select onChange={(e: any) => setCategoriaId(e.target.value)}>
                                {categorias.map((categoria) => (
                                    <option value={categoria.categoriaId} key={categoria.categoriaId}>
                                    {categoria.nome}
                                    </option>
                                ))}
                           </select>
                            <div className="text-center">
                                <button type="submit" className="btn btn-success mt-3 w-50">Cadastrar</button>
                            </div>
                            
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>

    );

}


export default TarefaCadastrar;