import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import TarefaListar from './components/tarefa-lista';
import TarefaCadastrar from './components/tarefa-cadastrar';
import TarefaAlterar from './components/tarefa-alterar';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <nav>
              <ul>
                  <li>
                      <Link to="/">Lista de tarefas</Link>
                  </li>
                  <li>
                      <Link to="/cadastro">Cadastro de tarefas</Link>
                  </li>
                  <li>
                      <Link to="/cadastro">Alterar tarefa</Link>
                  </li>
              </ul>
          </nav>
          <Routes>
              <Route path="/" element={<TarefaListar />} />
              <Route path="/cadastro" element={<TarefaCadastrar />} />
              <Route path='/tarefa/alterar/:tarefaId' element={<TarefaAlterar />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
