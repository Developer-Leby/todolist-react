import React from "react";
import styles from "./TodoHead.module.css";

const TodoHead = () => {
  return (
    <div className={styles.todoHeadBlock}>
      <h1>2019년 7월 10일</h1>
      <div className={styles.day}>수요일</div>
      <div className={styles.tasksLeft}>할 일 2개 남음</div>
    </div>
  );
};

export default TodoHead;
