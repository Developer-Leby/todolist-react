import React from "react";
import { useTodoState } from "../../reducer/TodoContext";
import styles from "./TodoHead.module.css";

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <div className={styles.todoHeadBlock}>
      <h1>{dateString}</h1>
      <div className={styles.day}>{dayName}</div>
      <div className={styles.tasksLeft}>할 일 {undoneTasks.length}개 남음</div>
    </div>
  );
};

export default TodoHead;
