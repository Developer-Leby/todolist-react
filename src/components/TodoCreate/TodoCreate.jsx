import React, { useEffect, useState } from "react";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../../reducer/TodoContext";
import styles from "./TodoCreate.module.css";

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const nextId = useTodoNextId();
  const dispatch = useTodoDispatch();

  const onToggle = () => setOpen((currentOpen) => !currentOpen);
  const onChnage = (event) => setText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    const todo = {
      id: nextId.current,
      text: text,
      done: false,
    };
    dispatch({ type: "CREATE", todo });
    setText("");
    setOpen(false);
    nextId.current += 1;
  };

  useEffect(() => {
    open || setText("");
  }, [open]);

  return (
    <>
      {open && (
        <div className={styles.insertformpositioner}>
          <form className={styles.insertform} onSubmit={onSubmit}>
            <input
              className={styles.input}
              autoFocus
              placeholder="할 일을 입력 후 엔터를 눌러주세요."
              value={text}
              onChange={onChnage}
            />
          </form>
        </div>
      )}
      <button
        className={`${styles.circlebutton} ${open && styles.open}`}
        onClick={onToggle}
        open={open}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default React.memo(TodoCreate);
