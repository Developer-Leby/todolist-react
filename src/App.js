import "./App.module.css";
import TodoCreate from "./components/TodoCreate/TodoCreate";
import TodoHead from "./components/TodoHead/TodoHead";
import TodoList from "./components/TodoList/TodoList";
import TodoTemplate from "./components/TodoTemplate/TodoTemplate";
import { TodoProvider } from "./reducer/TodoContext";

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
    </TodoProvider>
  );
}

export default App;
