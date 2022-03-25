import './App.module.css';
import TodoHead from './components/TodoHead/TodoHead';
import TodoTemplate from './components/TodoTemplate/TodoTemplate';

function App() {
  return (
    <div>
      <TodoTemplate>
        <TodoHead />
      </TodoTemplate>      
    </div>
  );
}

export default App;
