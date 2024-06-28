import React from 'react';
import './App.css';
import TarefaListar from './components/tarefa-lista';
import TarefaCadastrar from './components/tarefa-cadastrar';

function App() {
  return (
    <div>
      <TarefaListar></TarefaListar>
      <TarefaCadastrar></TarefaCadastrar>
    </div>
  );
}

export default App;
