import React from "react";
import styles from "./TodoItem.module.css";
import { MdDone, MdDelete } from "react-icons/md";

const TodoItem = ({ id, done, text }) => {
  return (
    <section className={styles.todoItemBlock}>
      <div className={`${styles.checkCircle} ${done && styles.done}`}>
        {done && <MdDone />}
      </div>
      <span className={`${styles.text} ${done && styles.done}`}>{text}</span>
      <div className={styles.remove}>
        <MdDelete />
      </div>
    </section>
  );
};

export default TodoItem;
