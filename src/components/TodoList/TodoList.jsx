import React from "react";
import { useTodoState } from "../../reducer/TodoContext";
import TodoHelp from "../TodoHelp/TodoHelp";
import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

const TodoList = () => {
  const todos = useTodoState();

  return (
    <div className={styles.todoListBlock}>
      {todos.length === 0 ? (
        <TodoHelp />
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
