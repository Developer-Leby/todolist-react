import React from "react";
import styles from "./TodoItem.module.css";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../../reducer/TodoContext";

const TodoItem = ({ id, done, text }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <section className={styles.todoItemBlock} onClick={onToggle}>
      <div className={`${styles.checkCircle} ${done && styles.done}`}>
        {done && <MdDone />}
      </div>
      <div className={`${styles.text} ${done && styles.done}`}>{text}</div>
      <div className={styles.remove} onClick={onRemove}>
        <MdDelete />
      </div>
    </section>
  );
};

export default React.memo(TodoItem);
