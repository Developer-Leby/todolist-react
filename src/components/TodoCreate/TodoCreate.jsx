import React, { useState } from "react";
import { MdAdd } from "react-icons/md";
import styles from "./TodoCreate.module.css";

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const onToggle = () => setOpen((currentOpen) => !currentOpen);

  return (
    <>
      {open && (
        <div className={styles.insertformpositioner}>
          <form className={styles.insertform}>
            <input
              className={styles.input}
              autoFocus
              placeholder="할 일을 입력 후, Enter를 눌러주세요."
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

export default TodoCreate;
