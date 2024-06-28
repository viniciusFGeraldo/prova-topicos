import { useEffect, useState } from 'react';
import { Tarefa } from '../models/Tarefa';
import { Categoria } from '../models/Categoria';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

function TarefaAlterar() {
    const { tarefaId } = useParams<{ tarefaId: string }>();
    const [titulo, setTitulo] = useState<string>('');
    const [descricao, setDescricao] = useState<string>('');
    const [categoriaId, setCategoriaId] = useState<number>(0);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

  useEffect(() => {
    if (tarefaId) {
      axios.get<Tarefa>(`http://localhost:5000/tarefas/buscar/{${categoriaId}`)
        .then((resposta) => {
            setTitulo(resposta.data.titulo);
            setDescricao(resposta.data.descricao);
            setCategoriaId(resposta.data.categoriaId);
        })
        .catch((error) => console.error('Erro ao buscar o tarefa:', error));
    }
  }, []);

  function alterar(e: any) {
    e.preventDefault();

    const tarefaAtualizado: Tarefa = {
        titulo: titulo,
        descricao: descricao,
        categoriaId: categoriaId
    };

    fetch(`http://localhost:5000/tarefas/alterar/${tarefaId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tarefaAtualizado)
    })
      .then((resposta) => resposta.json())
      .then((tarefa: Tarefa) => {
        console.log('tarefa atualizado com sucesso', tarefa);
      })
      .catch((error) => console.error('Erro ao atualizar tarefa:', error));
  }

  return (
    <div className="container w-50" style={{ marginTop: '8rem', backgroundColor: '#f8f9fa', padding: '2rem', borderRadius: '0.5rem'  }}>
      <div className="row justify-content-center">
        <div className="col-12">
          <form onSubmit={alterar}>
            <fieldset>
              <legend className="mb-4 text-center" style={{ color: '#495057', whiteSpace: 'nowrap' }}>tarefa</legend>
              <div className="mb-5">
                  <label className="form-label" style={{ color: '#161A26' }}>titulo:</label>
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
                  <button type="submit" className="btn btn-success mt-3 w-50">Salvar Alterações</button>
              </div>  
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TarefaAlterar;