import './App.module.css';
import TodoHead from './components/TodoHead/TodoHead';
import TodoList from './components/TodoList/TodoList';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
      </TodoTemplate>      
    </div>
  );
}

export default App;
