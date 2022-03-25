import './App.module.css';
import TodoCreate from './components/TodoCreate/TodoCreate';
import TodoHead from './components/TodoHead/TodoHead';
import TodoList from './components/TodoList/TodoList';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>      
    </div>
  );
}

export default App;
