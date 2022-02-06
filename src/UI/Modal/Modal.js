import react from "react";
import Button from "../../UI/Button/Button";
import Card from "../../UI/Card/Card";

import styles from "./Modal.module.css";

const Modal = (props) => {
  const exitHandler = (event) => {
    props.onClick();
  };

  return (
    <div>
      <div onClick={exitHandler} className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>{props.title}</header>
        <div className={styles.content}>{props.children}</div>
        <footer className={styles["button-right"]}>
          <Button onClick={exitHandler}>{props.buttonText}</Button>
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
