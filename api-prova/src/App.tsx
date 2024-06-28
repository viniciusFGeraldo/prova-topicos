import React from 'react';
import './App.css';
import TarefaListar from './components/tarefa-lista';
import TarefaCadastrar from './components/tarefa-cadastrar';
import TarefaAlterar from './components/tarefa-alterar';

function App() {
  return (
    <div>
      <TarefaListar></TarefaListar>
      <TarefaCadastrar></TarefaCadastrar>
      <TarefaAlterar></TarefaAlterar>
    </div>
  );
}

export default App;
